import React, { useState } from 'react';
import styles from './dateDropDown.module.scss';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { FormValues } from '../MyClassTitle/MyClassTitle';
import Image from 'next/image';

const timeList = [
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];
interface DateDropDownProps {
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  inputElement: JSX.Element;
  forSetValue: string;
}

export default function DateDropDown({
  setValue,
  inputElement,
  forSetValue,
}: DateDropDownProps) {
  const [isClick, setIsClick] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState('00:00');

  const handleIsClick = () => {
    setIsClick((prev) => !prev);
  };
  const handleStartTimeClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLElement;
    const time: string = target.innerText;
    setValue('mainSchedule.startTime', time, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
    setSelectedStartTime(time);
  };

  const handleEndTimeClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const time: string = target.innerText;
    setValue('mainSchedule.endTime', time, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
    setSelectedStartTime(time);
  };

  return (
    <>
      <div className={styles.startTime} onClick={handleIsClick}>
        {selectedStartTime}
        {isClick ? (
          <Image
            className={styles.chevronUp}
            src="/assets/icons/chevron-down.svg"
            width={20.5}
            height={20.5}
            alt="아래 화살표"
          />
        ) : (
          <Image
            src="/assets/icons/chevron-down.svg"
            width={20.5}
            height={20.5}
            alt="아래 화살표"
          />
        )}
        {isClick ? (
          <ul className={styles.timeList}>
            {timeList.map((item) => (
              <li
                className={styles.time}
                key={item}
                onClick={
                  forSetValue === 'startTime'
                    ? handleStartTimeClick
                    : handleEndTimeClick
                }
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
      {/* <input
        type="text"
        id="start-time"
        {...register(`mainSchedule.startTime`, {
          required: '시작 시간 입력은 필수입니다.',
        })}
        hidden
      /> */}
      {inputElement}
    </>
  );
}
