import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import MyClassCard from '@/components/MyClass/MyClassCard/MyClassCard';
import Layout from '@/components/Layout/Layout';
import styles from './index.module.scss';
import Button from '@/components/Button/Button';
import {
  getMyActivitiesClass,
  deleteActivitiesApi,
} from '@/apis/myActivitiesApi';
import InfiniteScroll from 'react-infinite-scroll-component';
import NoneExp from '@/components/NoneExp/NoneExp';

export default function MyClass() {
  const [list, setList] = useState<any[]>([]);
  const [cursorId, setCursorId] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    if (lastItemRef.current) {
      observerRef.current.observe(lastItemRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const getInitialData = async () => {
    try {
      setIsLoading(true);
      const res = await getMyActivitiesClass({ size: 5 });
      const formattedactivities = res.activities.map((activities: any) => ({
        id: activities.id,
        classImage: activities.bannerImageUrl,
        title: activities.title,
        price: activities.price,
        rating: activities.rating,
        reviewCount: activities.reviewCount,
      }));
      setTotalCount(res.totalCount);
      setList(formattedactivities);
      setCursorId(formattedactivities[formattedactivities.length - 1]?.id || 0);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const getMoreData = async () => {
    try {
      setIsLoading(true);
      const res = await getMyActivitiesClass({ size: 5, cursorId });
      const formattedactivities = res.activities.map((activities: any) => ({
        id: activities.id,
        classImage: activities.bannerImageUrl,
        title: activities.title,
        price: activities.price,
        rating: activities.rating,
        reviewCount: activities.reviewCount,
      }));
      setList((prevList) => [...prevList, ...formattedactivities]);
      setCursorId(
        formattedactivities[formattedactivities.length - 1]?.id || cursorId,
      );
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isLoading) {
        getMoreData();
      }
    });
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteActivitiesApi(id);
      setList(list.filter((item) => item.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddClass = async () => {
    router.push('/my-page/my-class/add-class');
  };

  console.log(list);

  return (
    <div>
      <Layout>
        <div>
          <div className={styles.titlaArea}>
            <div className={styles.title}>내 체험 관리</div>
            <div className={styles.buttonArea}>
              <Button buttonTitle={'체험 등록하기'} onClick={handleAddClass} />
            </div>
          </div>
          <InfiniteScroll
            dataLength={list.length}
            next={getMoreData}
            hasMore={list.length < totalCount}
            loader={<div>Loading...</div>}
          >
            {list.length === 0 ? (
              <NoneExp />
            ) : (
              list.map((myClass, index) => (
                <MyClassCard
                  key={myClass.id}
                  id={myClass.id}
                  classImage={myClass.classImage}
                  rating={myClass.rating}
                  reviewCount={myClass.reviewCount}
                  title={myClass.title}
                  price={myClass.price}
                  onDelete={handleDelete}
                  ref={index === list.length - 1 ? lastItemRef : null}
                />
              ))
            )}
          </InfiniteScroll>
          {isLoading && <div>Loading...</div>}
        </div>
      </Layout>
    </div>
  );
}
