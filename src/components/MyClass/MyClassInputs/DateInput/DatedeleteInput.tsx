import { UseFormRegister, FieldValues } from 'react-hook-form';
import styles from './dateInput.module.scss';
import deleteStyle from './dateDeleteInput.module.scss';
import Image from 'next/image';

interface DateDeleteInputProps {
  id?: string;
  register?: UseFormRegister<FieldValues>;
}

export default function DateDeleteInput({
  id,
  register,
}: DateDeleteInputProps) {
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
            src="assets/icons/minus-time-btn.svg"
            width={44}
            height={44}
            alt="시간 추가 버튼"
          />
        </div>
      </div>
    </div>
  );
}
