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
    text1: `본격적인 홈카페, \n맛있는 커피 내리는 법`,
    text2: '5월 최다리뷰 클래스',
    src: '/assets/images/image-sample-2.jpeg',
  },
  {
    text1: '고양이에게 안물리며 배 쓰다듬기',
    text2: '4월 최다리뷰 클래스',
    src: '/assets/images/image-sample-3.jpeg',
  },
  {
    text1: '본격적인 홈카페, \n맛있는 커피 내리는 법',
    text2: '5월 최다리뷰 클래스',
    src: '/assets/images/image-sample-2.jpeg',
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
