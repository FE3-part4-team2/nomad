import { useEffect, useState } from 'react';
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

  useEffect(() => {
    getInitialData();
  }, [selectedStatus]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    if (lastItemRef.current) {
      observerRef.current.observe(lastItemRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const getInitialData = async () => {
    try {
      setIsLoading(true);
      setList([]);
      let totalCount = 0;
      const res = await getMyReservation(6, selectedStatus);
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

      setTotalCount(totalCount);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getReservationCardList();
  }, [selectedStatus]);

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
      case '예약 전체':
        setSelectedStatus('');
        await getInitialData();
        return;
      default:
        selectedStatus = '';
    }
    setSelectedStatus(selectedStatus);
  };

  console.log(selectedStatus);

  return (
    <Layout>
      <div>
        <div className={styles.titlaArea}>
          <div className={styles.title}>예약 내역</div>
          <div className={styles.dropDownArea}>
            {/* 신취승거완  */}
            {/* {typeof window !== 'undefined' && width >= 1024 ? ( */}
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
            {/* ) : null} */}
            {/* pc사이즈에서만 보이게 하고 나머지 사이즈일때는 hidden */}
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
          </div>
        </div>
        <div>
          <InfiniteScroll
            dataLength={list.length}
            next={getMoreData}
            hasMore={list.length < totalCount}
            loader={<div>Loading...</div>}
          >
            {list.length === 0 ? (
              <NoneExp />
            ) : (
              list.map((reservation, index) => (
                <ReservationCardContainer
                  ref={index === list.length - 1 ? lastItemRef : null}
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
              ))
            )}
          </InfiniteScroll>
          {/* {isLoading && <p>로딩 로고를 넣고싶은데..</p>} */}
        </div>
      </div>
    </Layout>
  );
}
