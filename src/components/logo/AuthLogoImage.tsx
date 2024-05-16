import Image from 'next/image';
import styles from './authLogoImage.module.scss';
import Link from 'next/link';

export default function AuthLogoImage() {
  return (
    <div className={styles.logoContainer}>
      <Link href="/">
        <Image
          src="/assets/images/iceBreaker.png"
          alt="로고 이미지"
          width={330}
          height={200}
        />
      </Link>
    </div>
  );
}
