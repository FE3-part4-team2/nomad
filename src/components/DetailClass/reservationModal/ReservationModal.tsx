import styles from './reservationModal.module.scss';
import CalendarComponent from '../calendar/CalendarComponent';

export default function ReservationModal() {
  // const onClick = () => {};

  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.calendar_container}>
            <CalendarComponent />
          </div>
          <div className={styles.time_container}>
            <div className={styles.time_title}>예약 가능한 시간</div>
            {/* 날짜 선택 전 모달 */}
            {/* <div className={styles.choose_date}>
              <div className={styles.choose}>날짜를 선택해주세요.</div>
            </div> */}

            {/* 날짜 선택 후 모달 */}
            <div className={styles.choose_time}>14:00~15:00</div>
          </div>
        </div>
      </div>
    </>
  );
}