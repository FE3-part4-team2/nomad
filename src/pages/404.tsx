import Link from 'next/link';
import styles from '../styles/404.module.scss';
import Image from 'next/image';

export default function NotFound() {
  return (
    <>
      <div className={styles.notFound}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/" role="button">
              <h1>로고 들어갈 자리 입니다~</h1>
              {/* <Image src={} alt={} /> */}
            </Link>
          </div>
          <div className={styles.commentBox}>
            <h2>페이지를 찾을수 없습니다..</h2>
            <p>존재하지 않는 주소를 입력하셨거나,</p>
            <p>페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
          </div>
          <div className={styles.buttonBox}>
            <Link href="/" role="button">
              메인으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
