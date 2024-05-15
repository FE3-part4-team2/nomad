import { useEffect, useState, useRef } from 'react';
import ReservationCardContainer from '../../../containers/ReservationCardContainer/ReservationCardContainer';
import { getMyReservation } from '../../../apis/getMyReservation';
import Layout from '@/components/Layout/Layout';
import DropDown from '@/components/DropDown/DropDown';
import styles from './my-reservation.module.scss';

export default function MyReservation() {
  const [list, setList] = useState<any[]>([]);
  const [cursorId, setCursorId] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const observer = useRef<IntersectionObserver | null>(null); // observer 인스턴스를 저장하기 위한 ref
  const lastElementRef = useRef(null); // 관찰할 엘리먼트를 위한 ref

  const getReservationCardList = async () => {
    // 로딩 상태나 전체 리스트를 이미 불러왔는지 확인
    if (isLoading || list.length >= totalCount) return;

    try {
      setIsLoading(true);
      setList([]);
      const res = await getMyReservation(6, selectedStatus, cursorId);

      const formattedReservations = res.reservations.map(
        (reservation: any) => ({
          id: reservation.id,
          classImage: reservation.activity.bannerImageUrl,
          revStatus: reservation.status,
          title: reservation.activity.title,
          date: reservation.date,
          startTime: reservation.startTime,
          endTime: reservation.endTime,
          headCount: reservation.headCount,
          price: reservation.totalPrice,
          reviewSubmitted: reservation.reviewSubmitted,
        }),
      );

      setList((prevList) => [...prevList, ...formattedReservations]);
      setCursorId(
        formattedReservations[formattedReservations.length - 1]?.id || cursorId,
      );
      setTotalCount(res.totalCount);

      if (cursorId !== undefined) {
        setCursorId(cursorId);
      }

      // setTotalCount(totalCount);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getReservationCardList();
      }
    });

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [getReservationCardList, selectedStatus]);

  // useEffect(() => {
  //   getReservationCardList();
  // }, [selectedStatus]);

  useEffect(() => {
    getReservationCardList();
  }, [getReservationCardList, selectedStatus]);

  const handleDropDownClick = (status: string) => {
    if (status === '필터') {
      return;
    }

    let selectedStatus = '';
    switch (status) {
      case '예약 신청':
        selectedStatus = 'pending';
        break;
      case '예약 취소':
        selectedStatus = 'canceled';
        break;
      case '예약 승인':
        selectedStatus = 'confirmed';
        break;
      case '예약 거절':
        selectedStatus = 'declined';
        break;
      case '예약 완료':
        selectedStatus = 'completed';
        break;
      default:
        selectedStatus = '';
    }
    setSelectedStatus(selectedStatus);
  };

  return (
    <Layout>
      <div>
        <div className={styles.titlaArea}>
          <div className={styles.title}>예약 내역</div>
          <div className={styles.dropDownArea}>
            <DropDown
              dropDownName="필터"
              dropDownList={[
                '예약 신청',
                '예약 취소',
                '예약 승인',
                '예약 거절',
                '예약 완료',
              ]}
              onClick={handleDropDownClick}
            />
          </div>
        </div>
        {list.map((reservation, index) => (
          <ReservationCardContainer
            ref={index === list.length - 1 ? lastElementRef : null}
            key={reservation.id}
            classImage={reservation.classImage}
            revStatus={reservation.revStatus}
            title={reservation.title}
            date={reservation.date}
            startTime={reservation.startTime}
            endTime={reservation.endTime}
            headCount={reservation.headCount}
            price={reservation.price}
            reviewSubmitted={reservation.reviewSubmitted}
          />
        ))}
        {isLoading && <p>로딩 중...</p>}
      </div>
    </Layout>
  );
}
