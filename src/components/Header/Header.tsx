import styles from './header.module.scss';

export default function Header() {
  return (
    <>
      <main className={styles.main}>
        <img src="../assets/images/logo.png" alt="로고 이미지" />
        <div className={styles.sign}>
          <a href="/signin">로그인</a>
          <a href="/signup">회원가입</a>
        </div>
      </main>
    </>
  );
}
