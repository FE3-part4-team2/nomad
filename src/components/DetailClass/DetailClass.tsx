import Description from '@/components/DetailClass/description/Description';
import styles from './detailClass.module.scss';
import ShowArrow from '@/components/DetailClass/showArrow/ShowArrow';
import ClassTitle from '@/components/DetailClass/classTitle/ClassTitle';
import Map from '@/components/DetailClass/map/Map';
import Review from '@/components/DetailClass/review_/Review';
import Reservation from '@/components/DetailClass/reservation/Reservation';
import Image from './image_/Image';

export default function DetailClass() {
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
          <Reservation />
        </div>
      </div>
    </>
  );
}
