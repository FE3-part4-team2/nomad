import Image from 'next/image';
import styles from './banner.module.scss';

export default function Banner() {
  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h2>
            함께 배우면 즐거운
            <br /> 스트릿 댄스
          </h2>
          <h3>1월의 인기 경험 BEST</h3>
        </div>
      </div>
      <Image
        src="/assets/images/image-sample-1.jpeg"
        alt="메인 배경 이미지"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
