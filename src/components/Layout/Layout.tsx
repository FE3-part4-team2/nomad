import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import SideBar from '@/components/SideBar/SideBar';
<<<<<<< HEAD
import styles from './layout.module.css';
=======
import styles from './Layout.module.css';
>>>>>>> parent of 5b9186e (💄style :  input 컴포넌트 분리 완)

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
