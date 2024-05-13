import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form';
import styles from './dateInput.module.scss';
import Image from 'next/image';
import { FormValues } from '../../MyClassTitle/MyClassTitle';
import EditDateDeleteInput from './EditDateDeleteInput';
import { Dispatch, SetStateAction, useState } from 'react';

interface DateInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  fields: FieldArrayWithId<FormValues, 'schedules', 'id'>[];
  append: UseFieldArrayAppend<FormValues, 'schedules'>;
  remove: UseFieldArrayRemove;
  plusDefaultValue: {
    id: number;
    date: string;
    startTime: string;
    endTime: string;
  }[];
  setGetPlusDateInfo: Dispatch<
    SetStateAction<
      {
        id: number;
        date: string;
        startTime: string;
        endTime: string;
      }[]
    >
  >;
  setGonnaDeleteId: Dispatch<SetStateAction<number[]>>;
}

export default function EditDateInput({
  id,
  register,
  errors,
  fields,
  append,
  remove,
  plusDefaultValue,
  setGetPlusDateInfo,
  setGonnaDeleteId,
}: DateInputProps) {
  const [isAdd, setIsAdd] = useState(false);

  const deleteTime = (selectId: number) => {
    // 기존의 삭제될 아이디 목록에 새로운 아이디 추가
    setGonnaDeleteId((prev) => [...prev, selectId]);

    const newArr = plusDefaultValue.filter((value) => value.id !== selectId);
    setGetPlusDateInfo(newArr);
  };

  const addSelectTime = () => {
    append({ date: '', startTime: '', endTime: '' });
    setIsAdd(true);
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
            {...register(`mainSchedule.date`, {
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
            {...register(`mainSchedule.startTime`, {
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
            {...register(`mainSchedule.endTime`, {
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

      {errors.schedules ? (
        <p className={styles.error}>{errors.schedules?.message}</p>
      ) : (
        ''
      )}

      <div className={styles.plusTimeBorder}>
        {plusDefaultValue && !isAdd
          ? plusDefaultValue.map((item, index) => (
              <div key={item.id}>
                <EditDateDeleteInput
                  index={index}
                  register={register}
                  remove={remove}
                  setGetPlusDateInfo={setGetPlusDateInfo}
                  deleteTime={deleteTime}
                  item={item}
                  plusDefaultValue={plusDefaultValue}
                />
              </div>
            ))
          : ''}
      </div>
      {isAdd ? (
        <div className={styles.plusTimeBorder}>
          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                <EditDateDeleteInput
                  index={index}
                  register={register}
                  remove={remove}
                  setGetPlusDateInfo={setGetPlusDateInfo}
                  deleteTime={deleteTime}
                />
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
