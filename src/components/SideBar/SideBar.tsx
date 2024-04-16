import Image from 'next/image';
import Link from 'next/link';
import styles from './SideBar.module.scss';

export default function SideBar() {
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
      <Link href="/" className={styles.list}>
        <Image
          className={styles.icon}
          src="assets/images/my-info.svg"
          width={24}
          height={24}
          alt="내정보"
        />
        &nbsp;내 정보
      </Link>
      <Link href="/" className={styles.list}>
        <Image
          className={styles.icon}
          src="assets/images/reserve-info.svg"
          width={24}
          height={24}
          alt="예약 내역"
        />
        &nbsp;예약 내역
      </Link>
      <Link href="/" className={styles.list}>
        <Image
          className={styles.icon}
          src="assets/images/setting.svg"
          width={24}
          height={24}
          alt="내 채험 관리"
        />
        &nbsp;내 체험 관리
      </Link>
      <Link href="/" className={styles.list}>
        <Image
          className={styles.icon}
          src="assets/images/reserve-check.svg"
          width={24}
          height={24}
          alt="예약 현황"
        />
        &nbsp;예약 현황
      </Link>
    </div>
  );
}
