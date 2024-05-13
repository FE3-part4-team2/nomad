import CalendarContainer from '@/containers/CalendarContainer/CalendarContainer';
import Layout from '@/components/Layout/Layout';
// import Select from '@/components/Select/Select';
import styles from './index.module.scss';
import postSignIn from '@/apis/postSignInApi';
import { useMutation } from '@tanstack/react-query';
import SelectContainer from '@/containers/SelectContainer/SelectContainer';

export default function manageReservation() {
  const { mutate } = useMutation({
    mutationFn: postSignIn,
    onSuccess: (data) => {
      alert('로그인 성공');
      console.log(data);
    },
    onError: (error) => {
      alert('로그인 실패');
      console.log(error);
    },
  });

  return (
    <>
      <Layout>
        <div id={styles.reserveContainer}>
          <div id={styles.reserveHeader}>예약 현황</div>
          <SelectContainer />
          <CalendarContainer />
        </div>
        <button onClick={() => mutate()}>로그인</button>
      </Layout>
    </>
  );
}
