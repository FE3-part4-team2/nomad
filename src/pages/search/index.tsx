import ClassCardAfterSearch from '@/containers/mainPage/ClassCardList/ClassCardAfterSearch';
import SearchBarContainer from '@/containers/mainPage/SearchBarContainer/SearchBarContainer';
import { useRouter } from 'next/router';
import styles from '../index.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BannerContainer from '@/containers/mainPage/Banner/BannerContainer';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div>
      <Header />
      <div className={styles.banner}>
        <BannerContainer />
      </div>
      <div className={styles.content}>
        <div className={styles.searchBar}>
          <SearchBarContainer />
        </div>
        <ClassCardAfterSearch method="offset" keyword={String(q)} />
      </div>
      <Footer />
    </div>
  );
}
