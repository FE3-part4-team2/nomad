import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { loginApi, loginType } from '../../apis/authApi';
import getMyNotifications from '@/apis/getMyNotificationsApi';
import { useQuery } from '@tanstack/react-query';
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
  const [userInfo, setUserInfo] = useState<loginType>();
  const [open, setOpen] = useState<boolean>(false);

  const { data: noti } = useQuery<Notification>({
    queryKey: ['myNotifications'],
    queryFn: () => getMyNotifications(),
  });

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await loginApi();
      setUserInfo(res);
    };
    getUserInfo();
  }, [userInfo]);

  const onclick = () => {};

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
