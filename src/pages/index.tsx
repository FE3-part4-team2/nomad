import Layout from '@/components/Layout/Layout';
import styles from '@/styles/Home.module.css';
import Toast from '@/components/Toast/Toast';
import { LOGIN_MESSAGES } from '@/constants/message/index';
import DetailClass from '@/components/DetailClass/DetailClass';

export default function Home() {
  return (
    <>
      {/* <Layout>children처리</Layout> */}
      <DetailClass />
    </>
  );
}
