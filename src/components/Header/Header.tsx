import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { loginApi } from '../../apis/authApi';
import { useRouter } from 'next/router';
import { loginType } from '@/types/authType/AuthType';
import { userState } from '@/store/atoms/userState';
import { useSetRecoilState } from 'recoil';

export default function Header() {
  const setUser = useSetRecoilState(userState);
  const [userInfo, setUserInfo] = useState<loginType>();
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await loginApi('1234@1234.com', '123412341234');
      setUserInfo(res);
      setUser(res);
    };
    getUserInfo();
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = (action: any) => {
    switch (action) {
      case '마이페이지':
        router.push('/my-page');
        break;
      case '로그아웃':
        localStorage.removeItem('accessToken');
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="로고 이미지"
            width={165}
            height={28}
          />
        </Link>
        {userInfo ? (
          <div className={styles.userContainer}>
            {/* 클릭하면 알림 내역 모달 뜨게 */}
            <Image
              src="/assets/icons/notification.svg"
              alt="알림 아이콘"
              width={20}
              height={20}
              className={styles.notification}
            />
            <Image
              src="/assets/icons/line.svg"
              alt="구분선 아이콘"
              width={20}
              height={22}
            />

            <div className={styles.dropdownContainer} onClick={toggleMenu}>
              {userInfo?.user.profileImageUrl !== null ? (
                <Image
                  src={userInfo?.user.profileImageUrl}
                  alt="프로필 이미지"
                  width={32}
                  height={32}
                  className={styles.profileImage}
                />
              ) : (
                <Image
                  src="/assets/icons/default-user.png"
                  alt="기본 유저 이미지"
                  width={32}
                  height={32}
                  className={styles.profileImage}
                />
              )}
              <div className={styles.dropdownWrapper}>
                {showMenu && (
                  <div className={styles.dropdown}>
                    <ul>
                      <li onClick={() => handleItemClick('마이페이지')}>
                        마이페이지
                      </li>
                      <li onClick={() => handleItemClick('로그아웃')}>
                        로그아웃
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {userInfo?.user.nickname}
          </div>
        ) : (
          <div className={styles.sign}>
            {/* <button onClick={onclick} /> */}
            <Link href="/sign-in">로그인</Link>
            <Link href="/sign-up">회원가입</Link>
          </div>
        )}
      </main>
    </div>
  );
}
