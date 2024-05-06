import styles from './classCardList.module.scss';
import ClassCard from '@/components/mainPage/ClassCard/ClassCard';
import CategoryBar from '@/components/mainPage/CategoryBar/CategoryBar';
import { useEffect, useState } from 'react';
import { ClassData } from '@/types/type';
import { getClassListApi } from '@/apis/activitiesApi';

export default function ClassCardList() {
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
    <div className={styles.wrapper}>
      <CategoryBar />
      <h2 className={styles.title}>
        <span>🛼</span> 모든 체험
      </h2>
      {/* <div className={styles.classCardWrapper}> */}
      <div className={styles.classCards}>
        {cardList.map((data, index) => (
          <ClassCard key={index} classData={data} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}
