import Description from '@/components/DetailClass/description/Description';
import styles from './detailClass.module.scss';
import ShowArrow from '@/components/DetailClass/showArrow/ShowArrow';
import ClassTitle from '@/components/DetailClass/classTitle/ClassTitle';
import Map from '@/components/DetailClass/map/Map';
import Review from '@/components/DetailClass/review_/Review';
import { useEffect, useState } from 'react';
import { getDetailClassApi } from '@/apis/activitiesApi';
import ImageComponent from './image_/Image';
import { DetailClassType } from '@/types/activitiesType/ActivitiesType';
import CalendarReservation from '../CalendarReservation/CalendarReservation';

export default function DetailClass({ id }: { id: number }) {
  const [detail, setDetail] = useState<DetailClassType>();

  useEffect(() => {
    const getDetailClassInfo = async () => {
      const res = await getDetailClassApi(id);
      setDetail(res);
    };

    getDetailClassInfo();
  }, []);

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
          id={id}
        />
        <ImageComponent imageUrl={detail?.bannerImageUrl || ''} />
        <div className={styles.responsiveContainer || ''}>
          <div className={styles.responsiveLeft}>
            <Description description={detail?.description || ''} />
            <div className={styles.line}></div>
            <Map address={detail?.address || ''} title={detail?.title || ''} />
            <Review id={id} />
          </div>
          <CalendarReservation detail={detail as DetailClassType} />
        </div>
      </div>
    </>
  );
}
