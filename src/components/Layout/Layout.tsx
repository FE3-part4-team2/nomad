import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import SideBar from '@/components/SideBar/SideBar';
import styles from './layout.module.css';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
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
