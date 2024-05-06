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
  DetailClassType,
  DetailReviewType,
  getDetailClassApi,
  getDetailClassReviewApi,
} from '@/apis/activitiesApi';
import ImageComponent from './image_/Image';

export default function DetailClass() {
  const [detail, setDetail] = useState<DetailClassType>();
  const [review, setReview] = useState<DetailReviewType>({
    averageRating: 0,
    totalCount: 0,
    reviews: [
      {
        id: 0,
        user: {
          profileImageUrl: '',
          nickname: '',
          id: 0,
        },
        activityId: 0,
        rating: 0,
        content: '',
        createdAt: '',
        updatedAt: '',
      },
    ],
  });

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const getDetailClassInfo = async () => {
      const res = await getDetailClassApi(776);
      setDetail(res);
    };
    const getDetailClassReview = async () => {
      const res = await getDetailClassReviewApi(776);
      setReview(res);
    };
    getDetailClassInfo();
    getDetailClassReview();
  }, [detail?.userId]);

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
        <ClassTitle
          title={detail?.title || ''}
          category={detail?.category || ''}
          reviewCount={detail?.reviewCount || 0}
          address={detail?.address || ''}
        />
        <ImageComponent imageUrl={detail?.bannerImageUrl || ''} />
        <div className={styles.responsiveContainer || ''}>
          <div>
            <Description description={detail?.description || ''} />
            <div className={styles.line}></div>
            <Map address={detail?.address || ''} title={detail?.title || ''} />
            <Review review={review} />
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
