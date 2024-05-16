import getReservations from '@/apis/getReservationsApi';
import patchReservationsUpdate from '@/apis/patchReservationsUpdateApi';
import { idAtom } from '@/store/atoms/idState';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styles from './reserveInfoModal.module.scss';

interface ScheduleInfo {
  scheduleId: number;
  startTime: string;
  endTime: string;
  count: {
    declined: number;
    confirmed: number;
    pending: number;
  };
}

interface ReservationData {
  reservations: {
    id: number;
    nickname: string;
    headCount: number;
  }[];
  totalCount: number;
  cursorId: number;
}

export default function ReserveInfoModal({
  info,
  date,
}: {
  info: ScheduleInfo[];
  date: string;
}) {
  const queryClient = new QueryClient();
  const [option, setOption] = useState(0);
  const [status, setStatus] = useState('pending');
  const [id, setId] = useState(0);
  const [count] = useState(info[option].count);
  const [app] = useState(count.pending);
  const [con] = useState(count.confirmed);
  const [dec] = useState(count.declined);

  const activityId = useRecoilValue(idAtom);
  const scheduleId = info[option].scheduleId;

  const { data } = useQuery<ReservationData>({
    queryKey: ['reservation', status, option, scheduleId],
    queryFn: () => getReservations({ activityId, scheduleId, status }),
  });

  console.log(data);

  const { mutate } = useMutation({
    mutationFn: patchReservationsUpdate,
    onSuccess: (data) => {
      setId(data.id);
      alert('승인 성공');
      console.log(data);
      autodecline();
      queryClient.invalidateQueries(
        { queryKey: ['reservation'] },
        count as any,
      );
    },
    onError: (error) => {
      alert('승인 실패');
      console.log(error);
    },
  });

  const { mutate: decline } = useMutation({
    mutationFn: patchReservationsUpdate,
    onSuccess: (data) => {
      alert('거절 성공');
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ['reservation'] });
    },
    onError: (error) => {
      alert('거절 실패');
      console.log(error);
    },
  });

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(Number(e.target.value));
  };

  const autodecline = () => {
    const otherReservations = data?.reservations.filter((item) => {
      item.id !== id;
    });
    otherReservations?.map((item) => {
      decline({
        activityId,
        reservationId: item.id,
        status: 'declined',
      });
    });
  };

  return (
    <>
      <div className={styles.buttonBox}>
        <button
          onClick={() => setStatus('pending')}
          className={status === 'pending' ? styles.underline : ''}
        >
          {`신청 ${app}`}
        </button>
        <button
          onClick={() => setStatus('confirmed')}
          className={status === 'confirmed' ? styles.underline : ''}
        >
          {`승인 ${con}`}
        </button>
        <button
          onClick={() => setStatus('declined')}
          className={status === 'declined' ? styles.underline : ''}
        >
          {`거절 ${dec}`}
        </button>
      </div>
      <div className={styles.infoBox}>
        <div className={styles.dateHeader}>예약날짜</div>
        <div>{date}</div>
        <select className={styles.selector} onChange={handleOptionChange}>
          {info.map((item, index: number) => (
            <option
              value={index}
              key={item.scheduleId}
            >{`${item.startTime}-${item.endTime}`}</option>
          ))}
        </select>
      </div>
      <div className={styles.infoBox}>
        <div className={styles.dateHeader}>예약내역 </div>
        {status == 'pending' &&
          data?.reservations.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardInfo}>
                <div>닉네임</div>
                <div className={styles.cardData}> {item.nickname}</div>
              </div>
              <div className={styles.cardInfo}>
                <div>인원</div>{' '}
                <div className={styles.cardData}> {item.headCount}명</div>
              </div>
              <div className={styles.patchButtonBox}>
                <button
                  className={styles.approveButton}
                  onClick={() =>
                    mutate({
                      activityId,
                      reservationId: item.id,
                      status: 'confirmed',
                    })
                  }
                >
                  승인하기
                </button>
                <button
                  className={styles.declineButton}
                  onClick={() =>
                    decline({
                      activityId,
                      reservationId: item.id,
                      status: 'declined',
                    })
                  }
                >
                  거절하기
                </button>
              </div>
            </div>
          ))}
        {status == 'confirmed' &&
          data?.reservations.map((item) => (
            <div className={styles.card}>
              <div className={styles.cardInfo}>
                <div>닉네임</div>
                <div className={styles.cardData}> {item.nickname}</div>
              </div>
              <div className={styles.cardInfo}>
                <div>인원</div>{' '}
                <div className={styles.cardData}> {item.headCount}명</div>
              </div>
              <div className={styles.confirmedDiv}>예약 승인</div>
            </div>
          ))}
        {status == 'declined' &&
          data?.reservations.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.cardInfo}>
                <div>닉네임 </div>
                <div className={styles.cardData}> {item.nickname}</div>
              </div>
              <div className={styles.cardInfo}>
                <div>인원</div>{' '}
                <div className={styles.cardData}> {item.headCount}명</div>
              </div>
              <div className={styles.declinedDiv}>예약 거절</div>
            </div>
          ))}
      </div>
    </>
  );
}
