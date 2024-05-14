import Image from 'next/image';
import styles from './bestClassCard.module.scss';
import { ClassDataType } from '@/types/type';
import { useRouter } from 'next/router';

interface BestClassCardProps {
  classData: ClassDataType;
  id: number;
}

export default function BestClassCard({ classData, id }: BestClassCardProps) {
  const router = useRouter();
  const {
    bannerImageUrl,
    rating,
    reviewCount,
    title: classTitle,
    price,
  } = classData;

  const onClickCard = () => {
    router.push(`/class-info/${id}`);
  };

  return (
    <div className={styles.classCard} onClick={onClickCard}>
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
            <span>{`₩ ${price.toLocaleString('ko-KR')} `}</span>
            <span className={styles.person}>/ 인</span>
          </div>
        </div>
      </div>
    </div>
  );
}
