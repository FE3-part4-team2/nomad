import Image from 'next/image';
import styles from './noneExp.module.scss';

export default function NoneExp() {
  return (
    <div className={styles.pageBox}>
      <Image
        src="/assets/images/empty-docs.svg"
        width={200}
        height={200}
        alt="빈문서"
      />
      <div className={styles.text}> 아직 등록된 체험이 없어요</div>
    </div>
  );
}
