import BestClassCard from '@/components/mainPage/BestClassCard/BestClassCard';
import styles from './bestCardList.module.scss';
import dummyData from '@/apis/dummy';

export default function BestCardList() {
  const cardData = dummyData;

  return (
    <div>
      <h2 className={styles.title}>인기 체험</h2>
      <div className={styles.bestCards}>
        {cardData.activities.map((data, index) => (
          <BestClassCard key={index} classData={data} />
        ))}
      </div>
    </div>
  );
}
