import styles from './classCardList.module.scss';
import ClassCard from '@/components/mainPage/ClassCard/ClassCard';
import { useEffect, useState } from 'react';
import { ClassDataType, GetClassDataParamsType } from '@/types/type';
import { getClassListApi } from '@/apis/activitiesApi';
import CategoryBarContainer from '../CategoryBarContainer/CategoryBarContainer';

export default function ClassCardList(params: GetClassDataParamsType) {
  const [cardList, setCardList] = useState<ClassDataType[]>([]);
  const [category, setCategory] = useState<string>('');

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
  }, [params]);

  const onClickCategory = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  return (
    <div className={styles.wrapper}>
      <CategoryBarContainer onClick={onClickCategory} />
      <h2 className={styles.title}>
        <span>🛼</span> {category === '' ? '모든 체험' : category}
      </h2>
      {/* <div className={styles.classCardWrapper}> */}
      <div className={styles.classCards}>
        {cardList.map((data) => (
          <ClassCard key={data.id} classData={data} id={data.id} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}
