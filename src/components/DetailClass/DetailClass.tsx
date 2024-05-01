import Description from '@/components/DetailClass/description/Description';
import styles from './detailClass.module.scss';
import ShowArrow from '@/components/DetailClass/showArrow/ShowArrow';
import ClassTitle from '@/components/DetailClass/classTitle/ClassTitle';
import Map from '@/components/DetailClass/map/Map';
import Review from '@/components/DetailClass/review_/Review';
import Reservation from '@/components/DetailClass/reservation/Reservation';
import Image from './image_/Image';
import { useEffect, useState } from 'react';
import ReservationModal from './reservationModal/ReservationModal';
import Modal from './modal/Modal';

export default function DetailClass() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openReservationModal = () => {
    setIsOpenModal(true);
  };

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
        <ClassTitle />
        <Image />
        <div className={styles.responsiveContainer}>
          <div>
            <Description />
            <div className={styles.line}></div>
            <Map />
            <Review />
          </div>
          {isOpenModal && (
            <Modal isOpen={true} title={'예약'} setIsOpenModal={setIsOpenModal}>
              <ReservationModal />
            </Modal>
          )}
          <Reservation openReservationModal={openReservationModal} />
        </div>
      </div>
    </>
  );
}
