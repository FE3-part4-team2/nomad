import styles from './dateInput.module.scss';
import deleteStyle from './dateDeleteInput.module.scss';
import Image from 'next/image';
// import { Dispatch, SetStateAction } from 'react';

interface DateDeleteInputProps {
  id: string;

  onClick: () => void;
}

export default function DateDeleteInput({ id, onClick }: DateDeleteInputProps) {
  return (
    <div>
      <div className={deleteStyle.smallInputContainer}>
        <div className={styles.smallInputWrapper}>
          <input
            className={`${deleteStyle.smallInput} ${deleteStyle.dateInput}`}
            id={id}
            type="date"
          />
        </div>
        <div className={styles.smallInputWrapper}>
          <input
            className={`${deleteStyle.smallInput} ${deleteStyle.timeInput}`}
            id={id}
            type="time"
          />
        </div>
        <div className={styles.smallInputWrapper}>
          <input
            className={`${deleteStyle.smallInput} ${deleteStyle.timeInput}`}
            id={id}
            type="time"
          />
        </div>
        <div>
          <Image
            className={styles.timePlusIcon}
            src="/assets/icons/minus-time-btn.svg"
            width={44}
            height={44}
            alt="시간 추가 버튼"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}
