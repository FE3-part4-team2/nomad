import { getDetailClassReviewApi } from '@/apis/activitiesApi';
import styles from './review.module.scss';
import Image from 'next/image';
import { useRef, useState } from 'react';
import useIntersectionObserver from '@/hooks/useObserver/useIntersectionObserver';

interface ReviewsProps {
  id: number;
}

interface Review {
  id: number;
  user: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
  activityId: number;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function Review({ id }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const isClosedRef = useRef<boolean>(false);
  const averageRatingRef = useRef<number>(0);
  const SIZE = 2;

  const handleIntersection = async () => {
    try {
      if (isClosedRef.current) {
        return;
      }

      const {
        reviews: newReviews,
        averageRating,
        totalCount,
      } = await getDetailClassReviewApi(id, page, SIZE);
      averageRatingRef.current = averageRating;
      const maxPage = Math.ceil(totalCount / SIZE);

      if (maxPage === page) {
        isClosedRef.current = true;
      }
      setReviews((prevReviews) => [...prevReviews, ...newReviews]);
      setTotalCount(totalCount);
      setPage((prev) => prev + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const { sentinelRef } = useIntersectionObserver(handleIntersection);

  return (
    <>
      <section className={styles.reviewSection}>
        <div className={styles.reviewTitle}>후기</div>
        <div className={styles.reviewNumContainer}>
          <div className={styles.reviewCal}>
            {averageRatingRef.current.toFixed(1)}
          </div>
          <div>
            <div className={styles.reviewMost}>매우 만족</div>
            <div className={styles.reviewNum}>
              <Image
                src="/assets/images/star.svg"
                alt="별점 아이콘"
                width={16}
                height={16}
              />
              {totalCount}개 후기
            </div>
          </div>
        </div>
        <div className={styles.reviewListContainer}>
          {reviews.map((review) => (
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
                    <div className={styles.reviewer}>
                      {review?.user.nickname}
                    </div>
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
          <div className={styles.scrollContainer} ref={sentinelRef}></div>
        </div>
      </section>
    </>
  );
}
