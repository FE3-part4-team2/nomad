import styles from './reservationModal.module.scss';
import Calendar from '@/components/Calendar/Calendar';

export default function ReservationModal() {
  // const onClick = () => {};

  return (
    <>
      <div className={styles.container}>
        <div className="small">
          <div className={styles.calendar_container}>
            <Calendar fun={undefined} className={''} />
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
