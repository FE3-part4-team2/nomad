import Image from 'next/image';
import styles from './banner.module.scss';
import Link from 'next/link';

interface BannerProps {
  text1: string;
  text2?: string;
  src: string;
  id?: number;
}

export default function Banner({ text1, text2, src, id }: BannerProps) {
  return (
    <div className={styles.background}>
      <Link href={`/class-info/${id}`}>
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
      </Link>
    </div>
  );
}
