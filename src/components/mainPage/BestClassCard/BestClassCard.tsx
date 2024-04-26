import Image from 'next/image';
import styles from './bestClassCard.module.scss';
import { ClassData } from '@/types/type';

interface BestClassCardProps {
  classData: ClassData;
}

export default function BestClassCard({ classData }: BestClassCardProps) {
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
          src={bannerImageUrl}
          alt="클래스 이미지"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.classInfo}>
          <div className={styles.rate}>
            <Image
              src="/assets/icons/star-icon.svg"
              width={18}
              height={18}
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
    </div>
  );
}
