import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from './dateInput.module.scss';
import Image from 'next/image';
import DateDeleteInput from './DatedeleteInput';
import { FormValues } from '../../MyClassTitle/MyClassTitle';
import { useState } from 'react';

interface DateInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export default function DateInput({ id, register, errors }: DateInputProps) {
  const [dateInputArray, setDateInputArray] = useState<JSX.Element[]>([]);

  const handlePop = () => {
    setDateInputArray((prevArray) => {
      const newArray = [...prevArray]; // Create a copy of the array
      newArray.pop(); // Remove the last element
      return newArray;
    });
  };
  const addSelectTime = () => {
    setDateInputArray((prev) => [
      ...prev,
      <DateDeleteInput onClick={handlePop} id="moreDate" />,
    ]);
  };

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
            {...register('date', {
              required: '날짜 입력은 필수입니다.',
            })}
          />
        </div>
        <div className={styles.smallInputWrapper}>
          <label className={styles.inputSubtitle}>시작 시간</label>
          <input
            className={`${styles.smallInput} ${styles.timeInput}`}
            id={id}
            type="time"
            {...register('startTime', {
              required: '시작 시간 입력은 필수입니다.',
            })}
          />
        </div>
        <div className={styles.smallInputWrapper}>
          <label className={styles.inputSubtitle}>종료 시간</label>
          <input
            className={`${styles.smallInput} ${styles.timeInput}`}
            id={id}
            type="time"
            {...register('endTime', {
              required: '종료 시간 입력은 필수입니다.',
            })}
          />
        </div>
        <div>
          <Image
            className={styles.timePlusIcon}
            src="/assets/icons/plus-time-btn.svg"
            width={44}
            height={44}
            alt="시간 추가 버튼"
            onClick={addSelectTime}
          />
        </div>
      </div>
      {errors.date ? (
        <p className={styles.error}>{errors.date?.message}</p>
      ) : (
        ''
      )}
      {dateInputArray ? dateInputArray : ''}
      {/* {dateInputArray.map((element, index) => (
        <div key={index}>{element}</div>
      ))} */}
    </div>
  );
}
