import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import SideBar from '@/components/SideBar/SideBar';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.contents}>
        <SideBar />
        {children}
      </div>
      <Footer />
    </>
  );
}
