import BestClassCard from '@/components/mainPage/BestClassCard/BestClassCard';
import styles from './bestCardList.module.scss';
import { useEffect, useState } from 'react';
import { getClassListApi } from '@/apis/activitiesApi';
import { ClassDataType, GetClassDataParamsType } from '@/types/type';

export default function BestCardList(params: GetClassDataParamsType) {
  const [cardList, setCardList] = useState<ClassDataType[]>([]);

  async function CardList() {
    try {
      const res = await getClassListApi(params);
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
      <h2 className={styles.title}>
        <span>🔥</span> 인기 체험
      </h2>
      <div className={styles.bestCards}>
        {cardList.map((data, index) => (
          <BestClassCard key={index} classData={data} />
        ))}
      </div>
    </div>
  );
}
