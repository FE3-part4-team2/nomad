import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import styles from '@/styles/Home.module.css';
import SideBar from '@/components/SideBar/SideBar';
import Toast from '@/components/Toast/Toast';
import { LOGIN_MESSAGES } from '@/constants/message/index';
import Alarm from '@/components/Alarm/Alarm';
import DetailClass from '@/containers/DetailClass/DetailClass';

export default function Home() {
  return (
    <>
      <Header />
      {/* <SideBar />
      <Alarm /> */}
      <DetailClass />
      <Footer />
    </>
  );
}
