import Image from 'next/image';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.info_container}>
          <span>@codeit - 2024</span>
          <div>
            <span>Privacy Policy</span>
            <span>FAQ</span>
          </div>
        </div>
        <div className={styles.icon_container}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.icon_img}
              src="/assets/images/facebook.svg"
              alt="페이스북 아이콘"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.icon_img}
              src="/assets/images/twitter.svg"
              alt="트위터 아이콘"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.icon_img}
              src="/assets/images/youtube.png"
              alt="유튜브 아이콘"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.icon_img}
              src="/assets/images/instagram.png"
              alt="인스타그램 아이콘"
              width={20}
              height={20}
            />
          </a>
        </div>
      </section>
    </>
  );
}
