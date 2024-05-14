import getReservations from '@/apis/getReservationsApi';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { idAtom } from '@/store/atoms/idState';
import { useState } from 'react';
import patchReservationsUpdate from '@/apis/patchReservationsUpdateApi';
import { useMutation } from '@tanstack/react-query';

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
  const [option, setOption] = useState(0);
  const [status, setStatus] = useState('pending');
  const [id, setId] = useState(0);

  const activityId = useRecoilValue(idAtom);
  const scheduleId = info[option].scheduleId;

  const app = info[option].count.pending;
  const con = info[option].count.confirmed;
  const dec = info[option].count.declined;

  const { data } = useQuery<ReservationData>({
    queryKey: ['reservation', status, option],
    queryFn: () => getReservations({ activityId, scheduleId, status }),
  });

  const { mutate } = useMutation({
    mutationFn: patchReservationsUpdate,
    onSuccess: (data) => {
      setId(data.id);
      alert('승인 성공');
      console.log(data);
      autodecline();
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
      <div>
        <button onClick={() => setStatus('pending')}>
          신청
          {app}
        </button>
        <button onClick={() => setStatus('confirmed')}>승인{con}</button>
        <button onClick={() => setStatus('declined')}>거절{dec}</button>
      </div>
      <div>
        <div>예약날짜</div>
        <div>{date}</div>
        <select onChange={handleOptionChange}>
          {info.map((item, index: number) => (
            <option
              value={index}
              key={item.scheduleId}
            >{`${item.startTime}-${item.endTime}`}</option>
          ))}
        </select>
      </div>
      <div>
        <div>예약내역 </div>
        {status == 'pending' &&
          data?.reservations.map((item) => (
            <div key={item.id}>
              <div>닉네임 {item.nickname}</div>
              <div>인원 {item.headCount}</div>
              <div>
                <button
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
                  onClick={() =>
                    mutate({
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
            <div>
              <div>닉네임 {item.nickname}</div>
              <div>인원 {item.headCount}</div>
              <div>예약 승인</div>
            </div>
          ))}
        {status == 'declined' &&
          data?.reservations.map((item) => (
            <div>
              <div>닉네임 {item.nickname}</div>
              <div>인원 {item.headCount}</div>
              <div>예약 거절</div>
            </div>
          ))}
      </div>
    </>
  );
}