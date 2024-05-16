import { useEffect, useState, useRef } from 'react';
import ReservationCardContainer from '../../../containers/ReservationCardContainer/ReservationCardContainer';
import { getMyReservation } from '../../../apis/getMyReservation';
import Layout from '@/components/Layout/Layout';
import DropDown from '@/components/DropDown/DropDown';
import styles from './my-reservation.module.scss';
import NoneExp from '@/components/NoneExp/NoneExp';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function MyReservation() {
  const [list, setList] = useState<any[]>([]);
  const [cursorId, setCursorId] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    getInitialData();
  }, []);

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
      let res;
      if (selectedStatus === '') {
        res = await getMyReservation({ size: 5 });
      } else {
        res = await getMyReservation({ size: 5, status: selectedStatus });
      }
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
      setTotalCount(res.totalCount);
      setList(formattedReservations);
      setCursorId(
        formattedReservations[formattedReservations.length - 1]?.id || 0,
      );
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const getMoreData = async () => {
    try {
      setIsLoading(true);
      let res;
      if (selectedStatus === '') {
        res = await getMyReservation({ size: 5, cursorId });
      } else {
        res = await getMyReservation({
          size: 5,
          cursorId,
          status: selectedStatus,
        });
      }
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
      setTotalCount(res.totalCount);
      setList((prevList) => [...prevList, ...formattedReservations]);
      setCursorId(
        formattedReservations[formattedReservations.length - 1]?.id || cursorId,
      );
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isLoading) {
        getMoreData();
      }
    });
  };

  useEffect(() => {
    getInitialData();
  }, [selectedStatus]);

  const handleDropDownClick = async (status: string) => {
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
        setCursorId(0);
        setSelectedStatus('');
        setTotalCount(0);
        await getInitialData();
        return;
      default:
        selectedStatus = '';
    }
    setCursorId(0);
    setSelectedStatus(selectedStatus);
    await getInitialData();
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
                '예약 전체',
              ]}
              onClick={handleDropDownClick}
            />
          </div>
        </div>
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
    </Layout>
  );
}
