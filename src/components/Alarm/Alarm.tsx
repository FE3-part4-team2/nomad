import styles from './Alarm.module.scss';

export default function Alarm() {
  return (
    <div id={styles.alarmBox}>
      <div id={styles.alarmHeader}>
        <div>알람 x개</div>
        <img src="/assets/images/close.svg" alt="x" width={24} />
      </div>
      <div className={styles.alarmList}>
        <div>
          <img src="/assets/images/blue-dot.svg" alt="승인" />
          <img src="/assets/images/close.svg" alt="x" width={24} />
        </div>
        <div className={styles.alarmDetail}>알람 내용</div>
        <div className={styles.opacity}>x분 전</div>
      </div>
    </div>
  );
}
