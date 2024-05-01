import Button from '@/components/Button/Button';
import styles from './searchBar.module.scss';
import Image from 'next/image';

export default function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>무엇을 체험하고 싶으신가요?</div>
      <div className={styles.search}>
        <div className={styles.inputBar}>
          <Image
            src="/assets/icons/bed-icon.svg"
            alt="검색"
            height={24}
            width={24}
          />
          <div>
            <input placeholder="내가 원하는 체험은" />
          </div>
        </div>
        <div className={styles.button}>
          <Button
            status="black"
            buttonTitle="검색하기"
            radius={4}
            fontSize={1.6}
          />
        </div>
      </div>
    </div>
  );
}
