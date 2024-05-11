import styles from './reservation.module.scss';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { useState } from 'react';
import ReservationModal from '../reservationModal/ReservationModal';

interface ReservationProps {
  openReservationModal: () => void;
  price: number;
}

export default function Reservation({
  openReservationModal,
  price,
}: ReservationProps) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  const handleIncrease = () => {
    if (quantity < 10) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * price);
    }
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * price);
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
            <div className={styles.dateTitle}>날짜</div>
            <button className={styles.datePick} onClick={openReservationModal}>
              날짜 선택하기
            </button>
            <div className={styles.calendarContainer}>
              <ReservationModal />
            </div>
            {/* <div className={styles.timeContainer}>
              <div className={styles.timeTitle}>예약 가능한 시간</div>
              <div className={styles.chooseTime}>
                <Button
                  status="black"
                  buttonTitle="14:00~15:00"
                  onClick={openReservationModal}
                  fontSize={1.6}
                  radius={8}
                />
                <Button
                  status="white"
                  buttonTitle="15:00~~16:00"
                  onClick={openReservationModal}
                  fontSize={1.6}
                  radius={8}
                />
              </div>
            </div> */}
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
                defaultValue={quantity}
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
            {/* 날짜 선택해야 활성화 */}
            <Button
              status="disable"
              buttonTitle="예약하기"
              onClick={openReservationModal}
              fontSize={1.6}
              radius={6}
            />
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
