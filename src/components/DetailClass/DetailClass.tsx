import Description from '@/components/DetailClass/description/Description';
import styles from './detailClass.module.scss';
import ShowArrow from '@/components/DetailClass/showArrow/ShowArrow';
import ClassTitle from '@/components/DetailClass/classTitle/ClassTitle';
import Map from '@/components/DetailClass/map/Map';
import Review from '@/components/DetailClass/review_/Review';
import Reservation from '@/components/DetailClass/reservation/Reservation';
import { useEffect, useState } from 'react';
import ReservationModal from './reservationModal/ReservationModal';
import Modal from './modal/Modal';
import {
  getAvailableScheduleApi,
  getDetailClassApi,
} from '@/apis/activitiesApi';
import ImageComponent from './image_/Image';
import { DetailClassType } from '@/types/activitiesType/ActivitiesType';

export default function DetailClass({ id }: { id: number }) {
  const [detail, setDetail] = useState<DetailClassType>();
  const [date, setDate] = useState();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const getDetailClassInfo = async () => {
      const res = await getDetailClassApi(id);
      setDetail(res);
    };
    const getAvailableSchedule = async () => {
      const res = await getAvailableScheduleApi(776, '2024', '05');
      setDate(res);
      console.log(res);
    };
    getDetailClassInfo();
  }, []);

  const openReservationModal = () => {
    setIsOpenModal(true);
  };

  console.log(detail);
  // const closeReservationModal = () => {
  //   setIsOpenModal(false);
  // };

  useEffect(() => {
    document.documentElement.style.scrollbarGutter = 'stable';

    if (isOpenModal === true) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpenModal]);

  return (
    <>
      <div className={styles.container}>
        <ShowArrow />
        <ClassTitle
          title={detail?.title || ''}
          category={detail?.category || ''}
          rating={detail?.rating || 0}
          reviewCount={detail?.reviewCount || 0}
          address={detail?.address || ''}
        />
        <ImageComponent imageUrl={detail?.bannerImageUrl || ''} />
        <div className={styles.responsiveContainer || ''}>
          <div>
            <Description description={detail?.description || ''} />
            <div className={styles.line}></div>
            <Map address={detail?.address || ''} title={detail?.title || ''} />
            <Review id={id} />
          </div>
          {isOpenModal && (
            <Modal isOpen={true} title={'예약'} setIsOpenModal={setIsOpenModal}>
              <ReservationModal />
            </Modal>
          )}
          <Reservation
            openReservationModal={openReservationModal}
            price={detail?.price}
          />
        </div>
      </div>
    </>
  );
}
