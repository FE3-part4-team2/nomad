import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import styles from './dateInput.module.scss';
import Image from 'next/image';
import DateDeleteInput from './DatedeleteInput';
import { FormValues } from '../../MyClassTitle/MyClassTitle';
import DateDropDown from '../../MyClassDropDown/DateDropDown';

interface DateInputProps {
  id: string;
  setValue: UseFormSetValue<FormValues>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  fields: FieldArrayWithId<FormValues, 'schedules', 'id'>[];
  append: UseFieldArrayAppend<FormValues, 'schedules'>;
  remove: UseFieldArrayRemove;
  defaultValue?: {
    date: string;
    startTime: string;
    endTime: string;
  };
  plusDefaultValue?: {
    id: number;
    date: string;
    startTime: string;
    endTime: string;
  }[];
}

export default function DateInput({
  id,
  register,
  errors,
  fields,
  append,
  remove,
  setValue,
}: DateInputProps) {
  // const [dateInputArray, setDateInputArray] = useState<JSX.Element[]>([]);

  // const handlePop = () => {
  //   setDateInputArray((prevArray) => {
  //     const newArray = [...prevArray]; // Create a copy of the array
  //     newArray.pop(); // Remove the last element
  //     return newArray;
  //   });
  // };

  const addSelectTime = () => {
    append({ date: '', startTime: '', endTime: '' });
    // setDateInputArray((prev) => [
    //   ...prev,
    //   <DateDeleteInput onClick={handlePop} register={register} />,
    // ]);
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
            className={`${styles.smallInput} ${styles.dateInput} ${styles.input}`}
            id={id}
            type="date"
            {...register(`mainSchedule.date`, {
              required: '날짜 입력은 필수입니다.',
            })}
          />
        </div>
        <div className={styles.smallInputWrapper}>
          <label className={styles.inputSubtitle}>시작 시간</label>
          {/* <input
            className={`${styles.smallInput} ${styles.timeInput}`}
            id={id}
            type="time"
            {...register(`mainSchedule.startTime`, {
              required: '시작 시간 입력은 필수입니다.',
            })}
          /> */}
          <DateDropDown
            register={register}
            setValue={setValue}
            forSetValue={'startTime'}
            inputElement={
              <input
                type="text"
                id="mainSchedule.startTime"
                {...register(`mainSchedule.startTime`, {
                  required: '시작 시간 입력은 필수입니다.',
                })}
                hidden
              />
            }
          />
        </div>
        <div className={styles.smallInputWrapper}>
          <label className={styles.inputSubtitle}>종료 시간</label>
          {/* <input
            className={`${styles.smallInput} ${styles.timeInput}`}
            id={id}
            type="time"
            {...register(`mainSchedule.endTime`, {
              required: '종료 시간 입력은 필수입니다.',
            })}
          /> */}
          <DateDropDown
            forSetValue={'endTime'}
            register={register}
            setValue={setValue}
            inputElement={
              <input
                type="text"
                id="mainSchedule.endTime"
                {...register(`mainSchedule.endTime`, {
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
            src="/assets/icons/plus-time-btn.svg"
            width={44}
            height={44}
            alt="시간 추가 버튼"
            onClick={addSelectTime}
          />
        </div>
      </div>

      <div className={styles.plusTimeBorder}>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <DateDeleteInput
                errors={errors}
                index={index}
                register={register}
                remove={remove}
                setValue={setValue}
              />
            </div>
          );
        })}
      </div>
      {(errors.mainSchedule?.date ||
        errors.mainSchedule?.startTime ||
        errors.mainSchedule?.endTime) && (
        <p className={styles.error}>날짜 입력은 필수입니다.</p>
      )}
    </div>
  );
}
