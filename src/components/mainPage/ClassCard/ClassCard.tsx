import Image from 'next/image';
import styles from './classCard.module.scss';
import { ClassData } from '@/types/type';

interface ClassCardProps {
  classData: ClassData;
}

export default function ClassCard({ classData }: ClassCardProps) {
  const {
    bannerImageUrl,
    rating,
    reviewCount,
    title: classTitle,
    price,
  } = classData;

  return (
    <div className={styles.classCard}>
      <div className={styles.classImage}>
        <Image
          src="/assets/images/image-sample-3.jpeg"
          alt="클래스 이미지"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className={styles.classInfo}>
        <div className={styles.rate}>
          <Image
            src="/assets/icons/star-icon.svg"
            width={20}
            height={20}
            alt="평점"
          />
          <span>{`${rating}`}</span>
          <span className={styles.reviewCount}>{` (${reviewCount})`}</span>
        </div>
        <div className={styles.title}>{classTitle}</div>
        <div className={styles.price}>
          <span>{`₩ ${price} `}</span>
          <span className={styles.person}>/ 인</span>
        </div>
      </div>
    </div>
  );
}
