import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { loginApi, loginType } from '../../apis/authApi';
import getMyNotifications from '@/apis/getMyNotificationsApi';
import { useQuery } from '@tanstack/react-query';
import { loginApi } from '../../apis/authApi';
import getMyNotifications from '@/apis/getMyNotificationsApi';
import { useRouter } from 'next/router';
import { loginType } from '@/types/authType/AuthType';
import { userState } from '@/store/atoms/userState';
import { useSetRecoilState } from 'recoil';
import AlarmContainer from '@/containers/AlarmContainer/AlarmContainer';

interface Notification {
  totalCount: number;
  notifications: {
    id: number;
    teamId: string;
    userId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  }[];
  cursorId: number;
}
        
export default function Header() {
  const setUser = useSetRecoilState(userState);
  const [userInfo, setUserInfo] = useState<loginType>();
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  const { data: noti } = useQuery<Notification>({
    queryKey: ['myNotifications'],
    queryFn: () => getMyNotifications(),
  });
  
  useEffect(() => {
    const getUserInfo = async () => {
      const res = await loginApi();
      setUserInfo(res);
      setUser(res);
    };
    getUserInfo();

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

  const handleAlarm = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="로고 이미지"
            width={165}
            height={42}
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
            {open && noti ? (
              <AlarmContainer data={noti} onClick={handleAlarm} />
            ) : null}
            <button className={styles.alarm} onClick={handleAlarm} />
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
