import { DetailReviewType } from '@/apis/activitiesApi';
import styles from './review.module.scss';
import Image from 'next/image';

interface ReviewsProps {
  review: DetailReviewType;
}
export default function Review({ review }: ReviewsProps) {
  console.log(review);
  return (
    <>
      <section className={styles.reviewSection}>
        <div className={styles.reviewTitle}>후기</div>
        <div className={styles.reviewNumContainer}>
          <div className={styles.reviewCal}>{review?.averageRating}</div>
          <div>
            <div className={styles.reviewMost}>매우 만족</div>
            <div className={styles.reviewNum}>
              <Image
                src="/assets/images/star.svg"
                alt="별점 아이콘"
                width={16}
                height={16}
              />
              {review?.totalCount}개 후기
            </div>
          </div>
        </div>
        {review?.reviews.map((review) => (
          <div>
            <div className={styles.reviewContainer} key={review.id}>
              <div>
                {review?.user.profileImageUrl ? (
                  <Image
                    className={styles.profileImage}
                    src={review?.user.profileImageUrl}
                    alt="프로필 이미지"
                    width={45}
                    height={45}
                  />
                ) : (
                  <Image
                    src="/assets/icons/default-user.png"
                    alt="유저 기본 이미지"
                    width={45}
                    height={45}
                  />
                )}
              </div>
              <div className={styles.reviewWrapper}>
                <div className={styles.reviewerWrapper}>
                  <div className={styles.reviewer}>{review?.user.nickname}</div>
                  |
                  <div className={styles.reviewCreated}>
                    {review?.createdAt.replace('T', ' ').slice(0, 16)}
                  </div>
                </div>
                <div>{review?.content}</div>
              </div>
            </div>
            <div className={styles.line}></div>
          </div>
        ))}
      </section>
    </>
  );
}
