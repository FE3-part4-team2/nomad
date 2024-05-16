import React from 'react';
import Banner from '@/components/mainPage/Banner/Banner';
import styles from './bannerContainer.module.scss';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// Swiper.use([Navigation, Pagination, Autoplay]);

const bannerData = [
  {
    text1: `나만의 작은 정원, \n테라리움 만들기`,
    text2: '5월 최다리뷰 클래스',
    src: '/assets/images/terarium.jpg',
  },
  {
    text1: '바오패밀리 얼굴 구분하기',
    text2: '4월 최다리뷰 클래스',
    src: '/assets/images/fu.jpg',
  },
  {
    text1: '이제 냥냥펀지는 그만, \n고양이 뱃살 쓰다듬는 법',
    text2: '고양이 뱃살 최고야',
    src: '/assets/images/cat.jpg',
  },
];

export default function BannerContainer() {
  return (
    <Swiper
      className={styles.bannerWrapper}
      modules={[Navigation, Pagination, Autoplay]}
      rewind={true}
      navigation={true}
      autoplay={{
        delay: 3500,
      }}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
    >
      {bannerData.map((data, index) => (
        <SwiperSlide key={index} className={styles.banner}>
          <Banner text1={data.text1} text2={data.text2} src={data.src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
