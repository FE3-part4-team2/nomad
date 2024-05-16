import Image from 'next/image';
import Link from 'next/link';
import styles from './SideBar.module.scss';
import { useRouter } from 'next/router';

export default function SideBar() {
  const router = useRouter();
  return (
    <div className={styles.profileBox}>
      <form id={styles.profileForm}>
        <Image
          src="/assets/images/dumi-profile.png"
          width={160}
          height={160}
          alt="프로필이미지"
        />
        <label id={styles.pen} htmlFor={styles.profileImg}>
          <Image
            src="/assets/images/pen.svg"
            width={24}
            height={24}
            alt="펜아이콘"
          />{' '}
        </label>
        <input id={styles.profileImg} type="file" accept="image/*" />
      </form>
      <div id={styles.linkList}>
        <Link
          href="/my-page/profile-info"
          className={`${styles.list} ${router.pathname === '/my-page/profile-info' ? styles.active : ''}`}
        >
          <Image
            className={styles.icon}
            src="/assets/images/my-info.svg"
            width={24}
            height={24}
            alt="내정보"
          />
          내 정보
        </Link>
        <Link
          href="/my-page/my-reservation"
          className={`${styles.list} ${router.pathname === '/my-page/my-reservation' ? styles.active : ''}`}
        >
          <Image
            className={styles.icon}
            src="/assets/images/reserve-info.svg"
            width={24}
            height={24}
            alt="예약 내역"
          />
          예약 내역
        </Link>
        <Link
          href="/my-page/my-class"
          className={`${styles.list} ${router.pathname === '/my-page/my-class' ? styles.active : ''}`}
        >
          <Image
            className={styles.icon}
            src="/assets/images/setting.svg"
            width={24}
            height={24}
            alt="내 채험 관리"
          />
          내 체험 관리
        </Link>
        <Link
          href="/my-page/manage-reservation"
          className={`${styles.list} ${router.pathname === '/my-page/manage-reservation' ? styles.active : ''}`}
        >
          <Image
            className={styles.icon}
            src="/assets/images/reserve-check.svg"
            width={24}
            height={24}
            alt="예약 현황"
          />
          예약 현황
        </Link>
      </div>
    </div>
  );
}
