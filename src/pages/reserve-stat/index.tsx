import Calendar from '@/components/Calendar/Calendar';
import Layout from '@/components/Layout/Layout';
// import Select from '@/components/Select/Select';
import styles from '@/pages/reserve-stat/index.module.scss';
import postSignIn from '@/apis/postSignInApi';
import { useMutation } from '@tanstack/react-query';

export default function ReserveStat() {
  const { mutate } = useMutation({
    mutationFn: postSignIn,
    onSuccess: (data) => {
      alert('로그인 성공');
      console.log(data);
    },
  });

  return (
    <>
      <Layout>
        <div id={styles.reserveContainer}>
          <div id={styles.reserveHeader}>예약 현황</div>
          {/* <Select /> */}
          <Calendar />
        </div>
        <button onClick={() => mutate()}>로그인</button>
      </Layout>
    </>
  );
}
