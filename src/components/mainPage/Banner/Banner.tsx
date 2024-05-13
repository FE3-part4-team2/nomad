import Image from 'next/image';
import styles from './banner.module.scss';

interface BannerProps {
  text1?: string;
  text2?: string;
  src?: string;
}

export default function Banner({
  text1 = '댄스 스트리트',
  text2 = '5월 인기 클래스',
  src = '/assets/images/image-sample-1.jpeg',
}: BannerProps) {
  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h2>{text1}</h2>
          <h3>{text2}</h3>
        </div>
      </div>
      <Image
        src={src}
        alt="메인 배경 이미지"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
