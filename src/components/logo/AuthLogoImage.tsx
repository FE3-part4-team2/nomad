import Image from 'next/image';
import styles from './authLogoImage.module.scss';

export default function AuthLogoImage() {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/assets/icons/logo-icon.svg"
        alt="로고 이미지"
        width={100}
        height={100}
      />
      <Image
        src="/assets/icons/logo2.svg"
        alt="로고 이미지"
        width={250}
        height={28}
      />
    </div>
  );
}
