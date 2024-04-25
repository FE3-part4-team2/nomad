import Image from 'next/image';
import styles from './map.module.scss';

export default function Map() {
  return (
    <>
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <div>
            <Image
              src="/assets/images/test-map-mobile.png"
              alt="지도 이미지"
              layout="responsive"
              width={327}
              height={450}
            />
          </div>
          <div className={styles.infoWrapper}>
            <Image
              src="/assets/images/location.svg"
              alt="위치 아이콘"
              width={18}
              height={18}
            />
            <div>서울 중구 청계천로 100 10F</div>
          </div>
        </div>
      </section>
    </>
  );
}
