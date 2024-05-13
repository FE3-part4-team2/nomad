import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { loginApi, loginType } from '../../apis/authApi';

export default function Header() {
  const [userInfo, setUserInfo] = useState<loginType>();

  const onclick = () => {
    // useEffect(() => {
    const getUserInfo = async () => {
      const res = await loginApi('asd@asd.com', 'asdasdasd');
      setUserInfo(res);
    };
    getUserInfo();
    // }, []);
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
            <Image
              src="/assets/icons/notification.svg"
              alt="알림 아이콘"
              width={20}
              height={20}
            />
            <Image
              src="/assets/icons/line.svg"
              alt="구분선 아이콘"
              width={20}
              height={22}
            />

            {userInfo?.user.profileImageUrl !== null ? (
              <Image
                src={userInfo?.user.profileImageUrl}
                alt="프로필 이미지"
                width={32}
                height={32}
              />
            ) : (
              <Image
                src="/assets/icons/default-user.png"
                alt="기본 유저 이미지"
                width={32}
                height={32}
              />
            )}

            {userInfo?.user.nickname}
          </div>
        ) : (
          <div className={styles.sign}>
            <button onClick={onclick} />
            <Link href="/sign-in">로그인</Link>
            <Link href="/sign-up">회원가입</Link>
          </div>
        )}
      </main>
    </div>
  );
}
