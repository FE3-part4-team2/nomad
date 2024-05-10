import styles from './classCardList.module.scss';
import ClassCard from '@/components/mainPage/ClassCard/ClassCard';
import { useEffect, useState } from 'react';
import { ClassDataType } from '@/types/type';
import { getClassListApi } from '@/apis/activitiesApi';
import CategoryBarContainer from '../CategoryBarContainer/CategoryBarContainer';
import { useRecoilState } from 'recoil';
import { paramState } from '@/store/atoms/paramStates';

export default function ClassCardList() {
  const [cardList, setCardList] = useState<ClassDataType[]>([]);
  const [params, setParams] = useRecoilState(paramState);

  console.log(params.category);

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

  const updateCategory = (value: string) => {
    const updatedParams = {
      ...params,
      category: value,
    };
    setParams(updatedParams);
  };

  return (
    <div className={styles.wrapper}>
      <CategoryBarContainer onClick={updateCategory} />
      <h2 className={styles.title}>
        <span>🛼</span>{' '}
        {params.category === undefined ? '모든 체험' : params.category}
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
