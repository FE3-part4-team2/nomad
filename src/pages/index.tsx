import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import styles from '@/styles/Home.module.css';
import SideBar from '@/components/SideBar/SideBar';
import Toast from '@/components/Toast/Toast';
import { LOGIN_MESSAGES } from '@/constants/message/index';
import Alarm from '@/components/Alarm/Alarm';

export default function Home() {
  return (
    <>
      <SideBar />
      <Alarm />
      메인페이지
      <Header />
      메인페이지
      <Footer />
    </>
  );
}
