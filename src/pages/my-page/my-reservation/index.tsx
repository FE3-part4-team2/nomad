import { useEffect, useState } from 'react';
import ReservationCardContainer from '../../../containers/ReservationCardContainer/ReservationCardContainer';
import { getMyReservation } from '../../../apis/getMyReservation';
import Layout from '@/components/Layout/Layout';
// import useWindowSize from '../../../hooks/useWindowSize';

export default function MyReservation() {
  const [list, setList] = useState<any[]>([]);
  const [cursorId, setCursorId] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // const [selectedStatus, setSelectedStatus] = useState('');
  // const { width } = useWindowSize();

  const getReservationCardList = async () => {
    try {
      setIsLoading(true);
      setList([]);
      let totalCount = 0;
      const res = await getMyReservation(6);
      // const res = await getRevStatusMyReservation({
      //   status: selectedStatus,
      //   size: 6,
      // });
      totalCount = res.totalCount;

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
      // setList(
      //   res.reservations.map((reservation: any) => ({
      //     id: reservation.id,
      //     classImage: reservation.activity.bannerImageUrl,
      //     revStatus: reservation.status,
      //     title: reservation.activity.title,
      //     date: reservation.date,
      //     startTime: reservation.startTime,
      //     endTime: reservation.endTime,
      //     headCount: reservation.headCount,
      //     price: reservation.totalPrice,
      //     reviewSubmitted: reservation.reviewSubmitted,
      //   })),
      // );
      setTotalCount(totalCount);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getReservationCardList();
  }, []);
  // useEffect(() => {
  //   getReservationCardList();
  // }, [selectedStatus]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (
      scrollTop + clientHeight >= scrollHeight &&
      totalCount < list.length &&
      !isLoading
    ) {
      getReservationCardList();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, totalCount, isLoading]);

  // const handleDropDownClick = (status: string) => {
  //   if (status === '필터') {
  //     // 아무 동작도 하지 않고 드롭다운 리스트만 펼치기
  //     // if (width >= 1024) {
  //     // }
  //     return;
  //   }

  //   let selectedStatus = '';
  //   switch (status) {
  //     case '예약 신청':
  //       selectedStatus = 'pending';
  //       break;
  //     case '예약 취소':
  //       selectedStatus = 'canceled';
  //       break;
  //     case '예약 승인':
  //       selectedStatus = 'confirmed';
  //       break;
  //     case '예약 거절':
  //       selectedStatus = 'declined';
  //       break;
  //     case '예약 완료':
  //       selectedStatus = 'completed';
  //       break;
  //     default:
  //       selectedStatus = '';
  //   }
  //   // setSelectedStatus(selectedStatus);
  // };

  // console.log(selectedStatus);

  return (
    <Layout>
      <div>
        <div
          style={{
            fontFamily: 'Pretendard',
            fontWeight: '700',
            fontSize: '3.2rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>예약 내역</div>
          <div>
            {/* 신취승거완  */}
            {/* {width >= 1024 && (
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
            )} */}
            {/* <DropDown
              dropDownName="필터"
              dropDownList={[
                '예약 신청',
                '예약 취소',
                '예약 승인',
                '예약 거절',
                '예약 완료',
              ]}
              onClick={handleDropDownClick}
            /> */}
            {/* pc사이즈에서만 보이게 하고 나머지 사이즈일때는 hidden */}
          </div>
        </div>
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
            price={reservation.price}
            reviewSubmitted={reservation.reviewSubmitted}
          />
        ))}
      </div>
    </Layout>
  );
}
