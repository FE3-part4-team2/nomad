import { useEffect, useState } from 'react';
import styles from './image.module.scss';
import ModalImage from 'react-modal-image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageProps {
  bannerImageUrl: string;
  subImages?: { id: number; imageUrl: string }[];
}

export default function ImageComponent({
  bannerImageUrl,
  subImages,
}: ImageProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.imageSection}>
      {isMobile ? (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={10}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <ModalImage
              small={bannerImageUrl}
              large={bannerImageUrl}
              alt="메인이미지"
              className={styles.mainImage}
            />
          </SwiperSlide>
          {subImages?.map((image) => (
            <SwiperSlide key={image.id}>
              <ModalImage
                small={image.imageUrl}
                large={image.imageUrl}
                alt="서브이미지"
                className={styles.subImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          <div className={styles.mainImageWrapper}>
            <ModalImage
              small={bannerImageUrl}
              large={bannerImageUrl}
              alt="메인이미지"
              className={styles.mainImage}
            />
          </div>
          <div className={styles.subImageContainer}>
            {subImages?.slice(0, 4).map((i) => (
              <div key={i.id} className={styles.subImageWrapper}>
                <ModalImage
                  small={i.imageUrl}
                  large={i.imageUrl}
                  alt="서브이미지"
                  className={styles.subImage}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </section>

    // <>
    //   <section className={styles.imageSection}>
    //     <div className={styles.mainImageWrapper}>
    //       <ModalImage
    //         small={bannerImageUrl}
    //         large={bannerImageUrl}
    //         alt="메인이미지"
    //         className={styles.mainImage}
    //       />
    //     </div>
    //     <div className={styles.subImageContainer}>
    //       {subImages?.slice(0, 4).map((i) => (
    //         <div key={i.id} className={styles.subImageWrapper}>
    //           <ModalImage
    //             small={i.imageUrl}
    //             large={i.imageUrl}
    //             alt="서브이미지"
    //             className={styles.subImage}
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </section>
    // </>
  );
}
