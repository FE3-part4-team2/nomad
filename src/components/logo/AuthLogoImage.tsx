import Image from 'next/image';
import styles from './authLogoImage.module.scss';

export default function AuthLogoImage() {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/assets/images/iceBreaker.png"
        alt="로고 이미지"
        width={330}
        height={200}
      />
    </div>
  );
}
