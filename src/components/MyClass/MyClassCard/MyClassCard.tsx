import { useRouter } from 'next/router';
import { forwardRef, Ref } from 'react';

import Kebab from '@/components/DropDown/Kebab';
import styles from '@/components/MyClass/MyClassCard/myClassCard.module.scss';
import Image from 'next/image';
import starIcon from '../../../../public/assets/icons/star-icon.svg';

interface props {
  id: number;
  classImage: string;
  rating: number;
  reviewCount: number;
  title: string;
  price: number;
  onDelete: (id: number) => void;
}

const MyClassCard = forwardRef(
  (
    { id, classImage, rating, reviewCount, title, price, onDelete }: props,
    ref: Ref<HTMLDivElement>,
  ) => {
    const router = useRouter();

    const handleKebabClick = (item: string) => {
      if (item === '수정하기') {
        router.push('/my-page/my-class/edit-class');
      }
      if (item === '삭제하기') {
        onDelete(id);
      }
    };

    return (
      <div ref={ref} className={styles.myClassCardContainer}>
        <div className={styles.mainBox}>
          <div className={styles.classImageDiv}>
            <Image
              objectFit="cover"
              fill
              style={{
                borderBottomLeftRadius: '24px',
                borderTopLeftRadius: '24px',
              }}
              src={classImage}
              alt="예약한 클래스 이미지"
            />
          </div>
          <div className={styles.classDetail}>
            <div className={styles.detailMainArea}>
              <div className={styles.gradeArea}>
                <div className={styles.starIconDiv}>
                  <Image
                    src={starIcon}
                    objectFit="cover"
                    fill
                    alt="별 아이콘"
                  />
                </div>
                <div className={styles.gradeEverageArea}>
                  {rating} ({reviewCount})
                </div>
                <div></div>
              </div>
              <div className={styles.title}>{title}</div>
              <div className={styles.priceAndKebabArea}>
                <div className={styles.price}>
                  <div>₩{price.toLocaleString('ko-KR')}</div>
                  <div className={styles.etc}> /인</div>
                </div>
                <div>
                  <Kebab
                    dropDownList={['수정하기', '삭제하기']}
                    onClick={handleKebabClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
export default MyClassCard;
