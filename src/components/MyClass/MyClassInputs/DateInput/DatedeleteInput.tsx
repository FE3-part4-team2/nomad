import styles from './dateInput.module.scss';
import deleteStyle from './dateDeleteInput.module.scss';
import Image from 'next/image';
import { FormValues } from '../../MyClassTitle/MyClassTitle';
import { UseFieldArrayRemove, UseFormRegister } from 'react-hook-form';

interface DateDeleteInputProps {
  // id: string;
  // onClick: () => void;
  remove: UseFieldArrayRemove;
  index: number;
  register: UseFormRegister<FormValues>;
  defaultValue?: {
    id: number;
    date: string;
    startTime: string;
    endTime: string;
  };
}

export default function DateDeleteInput({
  // onClick,
  register,
  index,
  remove,
  defaultValue,
}: DateDeleteInputProps) {
  const removeSelectTime = () => {
    remove(index);
  };

  return (
    <div>
      <div className={deleteStyle.smallInputContainer}>
        <div className={styles.smallInputWrapper}>
          <input
            className={`${deleteStyle.smallInput} ${deleteStyle.dateInput}`}
            id="plusDate"
            type="date"
            value={defaultValue ? defaultValue.date : ''}
            {...register(`schedules.${index}.date`, {
              required: '날짜 입력은 필수입니다.',
            })}
          />
        </div>
        <div className={styles.smallInputWrapper}>
          <input
            className={`${deleteStyle.smallInput} ${deleteStyle.timeInput}`}
            id="plusStartTime"
            type="time"
            value={defaultValue ? defaultValue.startTime : ''}
            {...register(`schedules.${index}.startTime`, {
              required: '시작 시간 입력은 필수입니다.',
            })}
          />
        </div>
        <div className={styles.smallInputWrapper}>
          <input
            className={`${deleteStyle.smallInput} ${deleteStyle.timeInput}`}
            id="plusEndTime"
            type="time"
            value={defaultValue ? defaultValue.endTime : ''}
            {...register(`schedules.${index}.endTime`, {
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
            onClick={removeSelectTime}
          />
        </div>
      </div>
    </div>
  );
}
