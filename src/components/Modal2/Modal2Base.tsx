import { ReactNode } from 'react';
import styles from './modal2Base.module.scss';

interface Modal2BaseProps {
  children: ReactNode;
  title: string; // 모달의 타이틀
  xbutton: boolean; // false면 x버튼이 안보임
  background: string; // white or black
  size: string; // 사이즈에 입력된값이 모달의 크기조절용 클래스가됨
  onClose: () => void;
}

export default function Modal2Base({
  title,
  xbutton,
  children,
  background,
  size,
  onClose,
}: Modal2BaseProps) {
  return (
    <div
      className={`${styles.modalBackground} ${background === 'black' ? styles.blackBackground : styles.whiteBackground} `}
    >
      <div className={`${styles.modalContent} ${styles[size]}`}>
        {xbutton && (
          <div className={styles.modalHeader}>
            <div className={styles.title}>{title}</div>
            <button className={styles.closeButton} onClick={onClose} />
          </div>
        )}
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}
