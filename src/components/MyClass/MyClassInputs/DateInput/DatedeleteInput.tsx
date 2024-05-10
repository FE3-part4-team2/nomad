import styles from './dateInput.module.scss';
import deleteStyle from './dateDeleteInput.module.scss';
import Image from 'next/image';
import { FormValues } from '../../MyClassTitle/MyClassTitle';
import { UseFormRegister } from 'react-hook-form';

interface DateDeleteInputProps {
  // id: string;
  onClick: () => void;
  register: UseFormRegister<FormValues>;
}

export default function DateDeleteInput({
  onClick,
  register,
}: DateDeleteInputProps) {
  return (
    <div>
      <div className={deleteStyle.smallInputContainer}>
        <div className={styles.smallInputWrapper}>
          <input
            className={`${deleteStyle.smallInput} ${deleteStyle.dateInput}`}
            id="plusDate"
            type="date"
            {...register('plusDate', {
              required: '날짜 입력은 필수입니다.',
            })}
          />
        </div>
        <div className={styles.smallInputWrapper}>
          <input
            className={`${deleteStyle.smallInput} ${deleteStyle.timeInput}`}
            id="plusStartTime"
            type="time"
            {...register('plusStartTime', {
              required: '시작 시간 입력은 필수입니다.',
            })}
          />
        </div>
        <div className={styles.smallInputWrapper}>
          <input
            className={`${deleteStyle.smallInput} ${deleteStyle.timeInput}`}
            id="plusEndTime"
            type="time"
            {...register('plusEndTime', {
              required: '종료 시간 입력은 필수입니다.',
            })}
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
