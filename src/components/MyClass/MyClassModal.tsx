import Button from '../Button/Button';
import styles from './myClassModal.module.scss';

interface MyClassModalProps {
  message: string;
  onClick: () => void;
}

export default function MyClassModal({ message, onClick }: MyClassModalProps) {
  return (
    <>
      <div className={styles.modalBox}>
        <div className={styles.messsageWrapper}>
          <span className={styles.message}>{message}</span>
        </div>
        <div className={styles.button} onClick={onClick}>
          <Button buttonTitle="확인" radius={4} fontSize={1.6} />
        </div>
      </div>
    </>
  );
}
