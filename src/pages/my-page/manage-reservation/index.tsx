import Layout from '@/components/Layout/Layout';
import CalendarContainer from '@/containers/CalendarContainer/CalendarContainer';
// import Select from '@/components/Select/Select';
import getMyActivities from '@/apis/myActivitiesApi';
import NoneExp from '@/components/NoneExp/NoneExp';
import SelectContainer from '@/containers/SelectContainer/SelectContainer';
import { useQuery } from '@tanstack/react-query';
import styles from './index.module.scss';
import Head from 'next/head';

interface ActivityData {
  activities: {
    id: number; // 활동의 고유 ID
    userId: number; // 사용자 ID
    title: string; // 활동 제목
    description: string; // 활동 설명
    category: string; // 활동 카테고리
    price: number; // 가격
    address: string; // 주소
    bannerImageUrl: string; // 배너 이미지 URL
    rating: number; // 평점
    reviewCount: number; // 리뷰 수
    createdAt: string; // 생성 날짜, ISO 8601 날짜 문자열
    updatedAt: string;
  }[];
  cursorId: number | null;
  totalCount: number;
}

export default function manageReservation() {
  const { data } = useQuery<ActivityData>({
    queryKey: ['myActivities'],
    queryFn: () => getMyActivities(),
  });

  return (
    <>
      <Head>
        <title>예약 현황</title>
      </Head>
      <Layout>
        <div>
          <div id={styles.reserveContainer}>
            <div id={styles.reserveHeader}>예약 현황</div>
            {data?.totalCount ? (
              <div>
                <SelectContainer data={data} />
                <CalendarContainer />
              </div>
            ) : (
              <NoneExp />
            )}
          </div>
        </div>
        {/* <button onClick={() => mutate()}>로그인</button> */}
      </Layout>
    </>
  );
}
