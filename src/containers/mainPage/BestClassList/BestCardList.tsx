import BestClassCard from '@/components/mainPage/BestClassCard/BestClassCard';
import styles from './bestCardList.module.scss';
import { useEffect, useState } from 'react';
import { getClassListApi } from '@/apis/activitiesApi';
import { ClassData } from '@/types/type';

export default function BestCardList() {
  const [cardList, setCardList] = useState<ClassData[]>([]);

  async function CardList() {
    try {
      const res = await getClassListApi('offset');
      const cardData = res.activities;
      setCardList(cardData);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    CardList();
  }, []);

  return (
    <div>
      <h2 className={styles.title}>인기 체험</h2>
      <div className={styles.bestCards}>
        {cardList.map((data, index) => (
          <BestClassCard key={index} classData={data} />
        ))}
      </div>
    </div>
  );
}
