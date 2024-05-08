import Image from 'next/image';
import styles from './classTitle.module.scss';
import Kebab from '@/components/DropDown/Kebab';

export default function ClassTitle() {
  return (
    <>
      <section className={styles.titleSection}>
        <div className={styles.classCategory}>문화 예술</div>
        <div className={styles.titleContainer}>
          <div>
            <div className={styles.classTitle}>
              함께 배우면 즐거운 스트릿 댄스
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.infoWrapper}>
                <Image
                  src="/assets/images/star.svg"
                  alt="별점 아이콘"
                  width={16}
                  height={16}
                />
                <div className={styles.starNum}>4.0 (293)</div>
              </div>
              <div className={styles.infoWrapper}>
                <Image
                  src="/assets/images/location.svg"
                  alt="위치 아이콘"
                  width={18}
                  height={18}
                />
                <div>서울 중구 청계천로 100 10F</div>
              </div>
            </div>
          </div>
          <Kebab />
        </div>
      </section>
    </>
  );
}
