import styles from './reservation.module.scss';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { useState } from 'react';
import MiniCalendarContainer from '../miniCalendarContainer/MiniCalendarContainer';

interface ReservationProps {
  openReservationModal: () => void;
  setCalendarId: any;
  headCount: number;
  setHeadCount: any;
  price: number;
  submitReservation: () => void;
  calendarId: number;
  selectedDate: string;
  selectedStartTime: string;
  selectedEndTime: string;
  setSelectedDate: any;
  setSelectedStartTime: any;
  setSelectedEndTime: any;
  closeModal: () => void;
}

export default function Reservation({
  openReservationModal,
  setCalendarId,
  headCount,
  setHeadCount,
  price,
  submitReservation,
  calendarId,
  selectedDate,
  selectedStartTime,
  selectedEndTime,
  setSelectedDate,
  setSelectedStartTime,
  setSelectedEndTime,
  closeModal,
}: ReservationProps) {
  const [totalPrice, setTotalPrice] = useState(price || 0);

  const handleIncrease = () => {
    if (headCount < 10) {
      const newHeadCount = headCount + 1;
      setHeadCount(newHeadCount);
      setTotalPrice(newHeadCount * price);
    }
  };
  const handleDecrease = () => {
    if (headCount > 1) {
      const newHeadCount = headCount - 1;
      setHeadCount(newHeadCount);
      setTotalPrice(newHeadCount * price);
    }
  };

  return (
    <>
      <section className={styles.reservationSection}>
        <div className={styles.reservationContainer}>
          <div>
            <div className={styles.priceWrapper}>
              <div className={styles.price}>₩ {price}</div>
              <div className={styles.per}>/ 인</div>
            </div>
            <div className={styles.titleContainer}>
              <div className={styles.dateTitle}>날짜</div>
            </div>
            {calendarId ? (
              <button
                onClick={openReservationModal}
                className={styles.selectedDateContainer}
              >
                {selectedDate} {selectedStartTime}~{selectedEndTime}
              </button>
            ) : (
              <button
                className={styles.datePick}
                onClick={openReservationModal}
              >
                날짜 선택하기
              </button>
            )}
            <div className={styles.calendarContainer}>
              <MiniCalendarContainer
                setCalendarId={setCalendarId}
                setSelectedDate={setSelectedDate}
                setSelectedStartTime={setSelectedStartTime}
                setSelectedEndTime={setSelectedEndTime}
                closeModal={closeModal}
              />
            </div>

            <div className={styles.personNum}>참여 인원 수</div>
            <div className={styles.inputContainer}>
              <button className={styles.inputSubtract} onClick={handleDecrease}>
                <Image
                  src="/assets/icons/Subtract.svg"
                  alt="마이너스 아이콘"
                  width={20}
                  height={20}
                />
              </button>
              <input
                className={styles.chooseNum}
                type="number"
                value={headCount}
              />
              <button className={styles.inputAdd} onClick={handleIncrease}>
                <Image
                  src="/assets/icons/Add.svg"
                  alt="플러스 아이콘"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
          <div className={styles.submitButton}>
            {selectedStartTime ? (
              <Button
                status="black"
                buttonTitle="예약하기"
                onClick={submitReservation}
                fontSize={1.6}
                radius={6}
              />
            ) : (
              <Button
                status="disable"
                buttonTitle="예약하기"
                onClick={submitReservation}
                fontSize={1.6}
                radius={6}
              />
            )}
          </div>
          <div className={styles.totalContainer}>
            <div className={styles.totalTitle}>총 합계</div>
            <div className={styles.totalPrice}>₩ {totalPrice}</div>
          </div>
        </div>
      </section>
    </>
  );
}
