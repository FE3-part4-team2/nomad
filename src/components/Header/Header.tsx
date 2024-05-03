import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <main className={styles.main}>
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="로고 이미지"
            width={165}
            height={28}
          />
        </Link>
        <div className={styles.sign}>
          <Link href="/sign-in">로그인</Link>
          <Link href="/sign-up">회원가입</Link>
        </div>
      </main>
    </>
  );
}
