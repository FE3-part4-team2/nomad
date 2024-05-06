import { UseFormRegister, FieldValues } from 'react-hook-form';
import styles from './dateInput.module.scss';
import Image from 'next/image';
import DateDeleteInput from './DatedeleteInput';

interface DateInputProps {
  id?: string;
  register?: UseFormRegister<FieldValues>;
}

export default function DateInput({ id }: DateInputProps) {
  return (
    <div>
      <label className={styles.inputTitle} htmlFor={id}>
        예약 가능한 시간대
      </label>
      <div className={styles.isAdd}>
        <div className={styles.smallInputWrapper}>
          <label className={styles.inputSubtitle}>날짜</label>
          <input
            className={`${styles.smallInput} ${styles.dateInput}`}
            id={id}
            type="date"
          />
        </div>
        <div className={styles.smallInputWrapper}>
          <label className={styles.inputSubtitle}>시작 시간</label>
          <input
            className={`${styles.smallInput} ${styles.timeInput}`}
            id={id}
            type="time"
          />
        </div>
        <div className={styles.smallInputWrapper}>
          <label className={styles.inputSubtitle}>종료 시간</label>
          <input
            className={`${styles.smallInput} ${styles.timeInput}`}
            id={id}
            type="time"
          />
        </div>
        <div>
          <Image
            className={styles.timePlusIcon}
            src="/assets/icons/plus-time-btn.svg"
            width={44}
            height={44}
            alt="시간 추가 버튼"
          />
        </div>
      </div>
      <DateDeleteInput />
      <DateDeleteInput />
    </div>
  );
}
