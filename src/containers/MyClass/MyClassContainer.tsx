// import { getDetailClassApi } from '@/apis/activitiesApi';
import MyClassTitle from '@/components/MyClass/MyClassTitle/MyClassTitle';
// import { DetailClassType } from '@/types/activitiesType/ActivitiesType';
// import { useEffect, useState } from 'react';

export default function MyClassContainer() {
  //   const [getActivityInfo, setGetActivityInfo] = useState<DetailClassType>();

  //   useEffect(() => {
  //     const getDetailActivity = async () => {
  //       const data = await getDetailClassApi(826);
  //       console.log(data);
  //       setGetActivityInfo(data);
  //     };
  //     getDetailActivity();
  //   }, []);

  return (
    <>
      <MyClassTitle buttonTitle="수정하기" />
    </>
  );
}
