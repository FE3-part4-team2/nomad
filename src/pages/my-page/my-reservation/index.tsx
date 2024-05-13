import { useEffect, useState } from 'react';
import ReservationCardContainer from '../../../containers/ReservationCardContainer/ReservationCardContainer';
import { getMyReservationType } from '../../../types/type';
import getMyReservation from '../../../apis/getMyReservation';

export default function MyReservation() {
  const [list, setList] = useState<any[]>([]);
  const [cursorId, setCursorId] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getReservationCardList = async ({
    cursorId,
    size,
    status,
  }: getMyReservationType) => {
    try {
      setIsLoading(true);
      let totalCount = 0;
      const res = await getMyReservation({ cursorId, size, status });
      totalCount = res.totalCount;
      cursorId = res.cursorId;

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
      if (cursorId !== undefined) {
        setCursorId(cursorId);
      }
      setTotalCount(totalCount);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getReservationCardList({ cursorId: 0, size: 6, status: 'CONFIRMED' });
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (
      scrollTop + clientHeight >= scrollHeight &&
      totalCount < list.length &&
      !isLoading
    ) {
      getReservationCardList({
        cursorId,
        size: 10,
        status: 'CONFIRMED',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, totalCount, isLoading]);

  return (
    <div>
      {list.map((reservation) => (
        <ReservationCardContainer
          key={reservation.id}
          classImage={reservation.classImage}
          revStatus={reservation.revStatus}
          title={reservation.title}
          date={reservation.date}
          startTime={reservation.startTime}
          endTime={reservation.endTime}
          headCount={reservation.headCount}
          price={reservation.totalPrice}
          reviewSubmitted={reservation.reviewSubmitted}
        />
      ))}
    </div>
  );
}
