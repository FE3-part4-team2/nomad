import Image from 'next/image';
import Link from 'next/link';
import styles from './SideBar.module.scss';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { userState, userNewImage } from '@/store/atoms/userState';
import { useRecoilValue } from 'recoil';

export default function SideBar() {
  const router = useRouter();
  const [newImage, setNewImage] = useRecoilState(userNewImage);
  const loggedInUser = useRecoilValue(userState);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0]; // 선택한 이미지 파일
    const reader = new FileReader();

    reader.onload = (e) => {
      // 이미지를 읽어들여서 userNewImage Recoil 상태에 저장
      if (e.target?.result) {
        setNewImage(e.target.result.toString());
      }
    };
    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };

  // loggedInUserId?.user.profileImageUrl

  return (
    <div className={styles.profileBox}>
      <form id={styles.profileForm}>
        <Image
          src={
            newImage ||
            loggedInUser?.user.profileImageUrl ||
            '/assets/images/dumi-profile.png'
          }
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
        <input
          id={styles.profileImg}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
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
