import Calendar from '@/components/Calendar/Calendar';
import Layout from '@/components/Layout/Layout';
import Select from '@/components/Select/Select';
import styles from '@/pages/reserve-stat/index.module.scss';

export default function ReserveStat() {
  return (
    <>
      <Layout>
        <div id={styles.reserveContainer}>
          <div id={styles.reserveHeader}>예약 현황</div>
          <Select />
          <Calendar />
        </div>
      </Layout>
    </>
  );
}
