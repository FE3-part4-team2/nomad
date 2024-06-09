import styles from './dateInput.module.scss';
import deleteStyle from './dateDeleteInput.module.scss';
import Image from 'next/image';
import { FormValues } from '../../MyClassTitle/MyClassTitle';
import {
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';

interface DateDeleteInputProps {
  remove: UseFieldArrayRemove;
  index: number;
  register: UseFormRegister<FormValues>;
  plusDefaultValue?: {
    id: number;
    date: string;
    startTime: string;
    endTime: string;
  }[];

  item?: {
    id: number;
    date: string;
    startTime: string;
    endTime: string;
  };

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
  deleteTime: (selectId: number) => void;
  errors: FieldErrors<FormValues>;
}

export default function EditDateDeleteInput({
  register,
  index,
  remove,
  item,
  setGetPlusDateInfo,
  plusDefaultValue,
  deleteTime,
  errors,
}: DateDeleteInputProps) {
  console.log(item);

  const removeSelectTime = () => {
    remove(index);

    if (plusDefaultValue) {
      // plusDefaultValue 배열에서 해당 item을 찾아서 필터링
      const newArr = plusDefaultValue.filter((value) => value.id !== item?.id);
      setGetPlusDateInfo(newArr);
      // console.log(newArr);
    }
    if (item) {
      deleteTime(item?.id);
    }
  };

  return (
    <>
      <div>
        <div className={deleteStyle.smallInputContainer}>
          <div className={styles.smallInputWrapper}>
            <input
              className={`${deleteStyle.smallInput} ${deleteStyle.dateInput}`}
              defaultValue={item?.date}
              id="plusDate"
              type="date"
              // value={item?.date}
              {...register(
                `schedules.${index}.date`,

                // {
                //   required: '날짜 입력은 필수입니다.',
                // }
              )}
            />
          </div>
          <div className={styles.smallInputWrapper}>
            <input
              className={`${deleteStyle.smallInput} ${deleteStyle.timeInput}`}
              id="plusStartTime"
              type="time"
              value={item?.startTime}
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
              value={item?.endTime}
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
              alt="시간 뺴기 버튼"
              onClick={removeSelectTime}
            />
          </div>
        </div>
      </div>
      {(errors.schedules?.[index]?.date ||
        errors.schedules?.[index]?.startTime ||
        errors.schedules?.[index]?.endTime) && (
        <p className={styles.error}>추가한 날짜 입력은 필수입니다.</p>
      )}
    </>
  );
}
