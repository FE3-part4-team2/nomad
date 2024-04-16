import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import styles from '@/styles/Home.module.css';
import Toast from '@/components/Toast/Toast';
import { LOGIN_MESSAGES } from '@/constants/message/index';

export default function Home() {
  return (
    <>
      <Header />
      메인페이지
      <Footer />
    </>
  );
}
