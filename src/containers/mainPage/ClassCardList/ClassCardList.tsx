import styles from './classCardList.module.scss';
import ClassCard from '@/components/mainPage/ClassCard/ClassCard';
import { useRef, useState } from 'react';
import { ClassDataType } from '@/types/type';
import { getClassListApi } from '@/apis/activitiesApi';
import CategoryBarContainer from '../CategoryBarContainer/CategoryBarContainer';
import { useRecoilState } from 'recoil';
import { paramState } from '@/store/atoms/paramStates';
import useIntersectionObserver from '@/hooks/useObserver/useIntersectionObserver';

export default function ClassCardList() {
  const [cardList, setCardList] = useState<ClassDataType[]>([]);
  const [params, setParams] = useRecoilState(paramState);
  const [page, setPage] = useState(1);
  const isClosedRef = useRef<boolean>(false);

  const handleIntersection = async () => {
    try {
      if (isClosedRef.current) {
        return;
      }

      const res = await getClassListApi({
        ...params,
        page,
      });
      const cardData = res.activities;

      const maxPage = Math.ceil(res.totalCount / params.size!);

      if (maxPage === page) {
        isClosedRef.current = true;
      }

      setCardList((prevcardList) => [...prevcardList, ...cardData]);
      setPage((prev) => prev + 1);
    } catch (error) {
      throw error;
    }
  };

  const { sentinelRef } = useIntersectionObserver(handleIntersection);

  const updateCategory = (value: string) => {
    const updatedParams = {
      ...params,
      category: value,
    };
    setParams(updatedParams);
    setPage(1);
    setCardList([]);
    isClosedRef.current = false;
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
        {cardList.map((data, index) => (
          <ClassCard key={index} classData={data} id={data.id} />
        ))}
      </div>
      {/* </div> */}
      <div className={styles.scrollContainer} ref={sentinelRef}></div>
    </div>
  );
}
