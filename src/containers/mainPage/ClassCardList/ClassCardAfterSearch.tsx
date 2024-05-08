import styles from './classCardList.module.scss';
import ClassCard from '@/components/mainPage/ClassCard/ClassCard';
import { useEffect, useState } from 'react';
import { ClassDataType, GetClassDataParamsType } from '@/types/type';
import { getClassListApi } from '@/apis/activitiesApi';
import { useRouter } from 'next/router';

export default function ClassCardAfterSearch(params: GetClassDataParamsType) {
  const [cardList, setCardList] = useState<ClassDataType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const router = useRouter();
  const { q } = router.query;

  async function CardList() {
    try {
      const res = await getClassListApi(params);
      const cardData = res.activities;
      const totalData = res.totalCount;
      setTotal(totalData);
      setCardList(cardData);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    CardList();
  }, [params]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h2 className={styles.searchTitle}>
          🔎 <span>{q}</span> 으로 검색한 결과입니다.
        </h2>
        <div className={styles.total}>총 {total}개의 결과</div>
      </div>
      {/* <div className={styles.classCardWrapper}> */}
      <div className={styles.classCards}>
        {cardList.map((data) => (
          <ClassCard key={data.id} classData={data} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}
