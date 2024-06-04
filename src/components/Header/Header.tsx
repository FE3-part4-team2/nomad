import getMyNotifications from '@/apis/getMyNotificationsApi';
import { handleGetUserInfo } from '@/apis/myInfoApi';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { useIntersectionObserver } from '@/hooks/useObserver/useInfiniteQueryObserver';
import AlarmContainer from '@/containers/AlarmContainer/AlarmContainer';
import Cookie from 'js-cookie';

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
  const [userInfo, setUserInfo] = useState<string | null>();
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const router = useRouter();

  const {
    data: noti,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['myNotifications'],
    queryFn: ({ pageParam = 0 }) =>
      getMyNotifications({ cursorId: pageParam, size: 4 }),
    getNextPageParam: (lastPage) =>
      (lastPage as Notification).cursorId
        ? (lastPage as Notification).cursorId
        : undefined,
    initialPageParam: 0,
  });

  const { setTarget } = useIntersectionObserver({
    hasNextPage: hasNextPage,
    fetchNextPage: () => fetchNextPage(),
  });

  const { data, isLoading } = useQuery({
    queryKey: ['myInfo'],
    queryFn: () => handleGetUserInfo(),
  });

  useEffect(() => {
    // setUserInfo(localStorage.getItem('accessToken'));
    setUserInfo(Cookie.get('accessToken'));
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
        // localStorage.removeItem('accessToken');
        Cookie.remove('accessToken');
        Cookie.remove('refreshToken');
        setIsLoggedOut(true);
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

        {userInfo && !isLoggedOut ? (
          <div className={styles.userContainer}>
            {open && noti ? (
              <AlarmContainer
                data={noti.pages as Notification[]}
                setTarget={setTarget as any}
                onClick={handleAlarm}
              />
            ) : null}
            {noti?.pages[0].totalCount == 0 ? (
              <Image
                src="/assets/images/none-alarm.svg"
                width={25}
                height={25}
                alt="none-alarm"
                style={{ opacity: 0.5 }}
              />
            ) : (
              <button className={styles.alarm} onClick={handleAlarm} />
            )}
            <Image
              src="/assets/icons/line.svg"
              alt="구분선 아이콘"
              width={20}
              height={22}
            />

            <div className={styles.dropdownContainer} onClick={toggleMenu}>
              {data?.profileImageUrl !== null ? (
                <Image
                  src={
                    isLoading
                      ? '/assets/icons/default-user.png'
                      : data?.profileImageUrl
                  }
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

            {data?.nickname}
          </div>
        ) : (
          <div className={styles.sign}>
            <Link href="/sign-in">로그인</Link>
            <Link href="/sign-up">회원가입</Link>
          </div>
        )}
      </main>
    </div>
  );
}
