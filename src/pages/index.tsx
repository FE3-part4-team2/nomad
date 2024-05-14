import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './index.module.scss';
import BestCardList from '@/containers/mainPage/BestClassList/BestCardList';
import ClassCardList from '@/containers/mainPage/ClassCardList/ClassCardList';
import SearchBarContainer from '@/containers/mainPage/SearchBarContainer/SearchBarContainer';
import BannerContainer from '@/containers/mainPage/Banner/BannerContainer';

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.banner}>
        <BannerContainer />
      </div>
      <div className={styles.content}>
        <div className={styles.searchBar}>
          <SearchBarContainer />
        </div>
        <BestCardList method="offset" sort="most_reviewed" />
        <ClassCardList />
      </div>
      <Footer />
    </>
  );
}
