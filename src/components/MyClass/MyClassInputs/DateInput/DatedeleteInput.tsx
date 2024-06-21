import styles from './dateInput.module.scss';
import deleteStyle from './dateDeleteInput.module.scss';
import Image from 'next/image';
import { FormValues } from '../../MyClassTitle/MyClassTitle';
import {
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import PlusDateDropDown from '../../MyClassDropDown/PlusDateDropDown';

interface DateDeleteInputProps {
  setValue: UseFormSetValue<FormValues>;
  remove: UseFieldArrayRemove;
  index: number;
  register: UseFormRegister<FormValues>;
  defaultValue?: {
    id: number;
    date: string;
    startTime: string;
    endTime: string;
  };
  plusDefaultValue?: {
    id: number;
    date: string;
    startTime: string;
    endTime: string;
  };
  errors: FieldErrors<FormValues>;
}

export default function DateDeleteInput({
  register,
  index,
  remove,
  errors,
  setValue,
}: DateDeleteInputProps) {
  const removeSelectTime = () => {
    remove(index);
  };

  return (
    <>
      <div className={deleteStyle.smallInputContainer}>
        <div className={styles.smallInputWrapper}>
          <input
            className={`${deleteStyle.smallInput} ${deleteStyle.dateInput}`}
            id="plusDate"
            type="date"
            {...register(`schedules.${index}.date`, {
              required: '날짜 입력은 필수입니다.',
            })}
          />
        </div>
        <div className={styles.smallInputWrapper}>
          {/* <input
            className={`${deleteStyle.smallInput} ${deleteStyle.timeInput}`}
            id="plusStartTime"
            type="time"
            {...register(`schedules.${index}.startTime`, {
              required: '시작 시간 입력은 필수입니다.',
            })}
          /> */}
          <PlusDateDropDown
            forSetValue={'startTime'}
            register={register}
            setValue={setValue}
            index={index}
            inputElement={
              <input
                id="plusStartTime"
                type="text"
                {...register(`schedules.${index}.startTime`, {
                  required: '시작 시간 입력은 필수입니다.',
                })}
                hidden
              />
            }
          />
        </div>
        <div className={styles.smallInputWrapper}>
          {/* <input
            className={`${deleteStyle.smallInput} ${deleteStyle.timeInput}`}
            id="plusEndTime"
            type="time"
            {...register(`schedules.${index}.endTime`, {
              required: '종료 시간 입력은 필수입니다.',
            })}
          /> */}
          <PlusDateDropDown
            forSetValue={'endTime'}
            register={register}
            setValue={setValue}
            index={index}
            inputElement={
              <input
                id="plusEndTime"
                type="text"
                {...register(`schedules.${index}.endTime`, {
                  required: '종료 시간 입력은 필수입니다.',
                })}
                hidden
              />
            }
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
      {/* {errors.schedules?.[index]?.date ||
        errors.schedules?.[index]?.startTime ||
        (errors.schedules?.[index]?.endTime && (
          <p className={styles.error}>추가한 날짜 입력은 필수입니다.</p>
        ))} */}

      {(errors.schedules?.[index]?.date ||
        errors.schedules?.[index]?.startTime ||
        errors.schedules?.[index]?.endTime) && (
        <p className={styles.error}>추가한 날짜 입력은 필수입니다.</p>
      )}
    </>
  );
}
