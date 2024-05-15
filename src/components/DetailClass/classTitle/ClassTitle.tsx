import Image from 'next/image';
import styles from './classTitle.module.scss';
import Kebab from '@/components/DropDown/Kebab';
import { useRouter } from 'next/router';
import { deleteActivitiesApi } from '@/apis/myActivitiesApi';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/atoms/userState';

interface TitleProps {
  title: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: string;
  id: number;
  userId: number;
}

export default function ClassTitle({
  title,
  category,
  rating,
  reviewCount,
  address,
  id,
  userId,
}: TitleProps) {
  const router = useRouter();

  const onClickKebab = (action: string) => {
    switch (action) {
      case '수정하기':
        handleEdit();
        break;
      case '삭제하기':
        handleDelete();
        break;
      default:
        break;
    }
  };

  const handleEdit = () => {
    router.push(`/class-edit/${id}`);
  };
  const handleDelete = () => {
    deleteActivitiesApi(id);
    router.push('/');
  };

  const loggedInUserId = useRecoilValue(userState);

  console.log(loggedInUserId);
  return (
    <>
      <section className={styles.titleSection}>
        <div className={styles.classCategory}>{category}</div>
        <div className={styles.titleContainer}>
          <div>
            <div className={styles.classTitle}>{title}</div>
            <div className={styles.infoContainer}>
              <div className={styles.infoWrapper}>
                <Image
                  src="/assets/images/star.svg"
                  alt="별점 아이콘"
                  width={16}
                  height={16}
                />
                <div className={styles.starNum}>
                  {rating.toFixed(1)} ({reviewCount})
                </div>
              </div>
              <div className={styles.infoWrapper}>
                <Image
                  src="/assets/images/location.svg"
                  alt="위치 아이콘"
                  width={18}
                  height={18}
                />
                <div>{address}</div>
              </div>
            </div>
          </div>
          {loggedInUserId?.user.id === userId ? (
            <Kebab
              dropDownList={['수정하기', '삭제하기']}
              onClick={(action: string) => onClickKebab(action)}
            />
          ) : null}
        </div>
      </section>
    </>
  );
}
