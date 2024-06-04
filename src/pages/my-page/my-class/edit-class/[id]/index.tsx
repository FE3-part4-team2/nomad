// import { getDetailClassApi } from '@/apis/activitiesApi';
// import Layout from '@/components/Layout/Layout';
// import EditMyClass from '@/components/MyClass/MyClassTitle/EditMyClass';
// import { DetailClassType } from '@/types/activitiesType/ActivitiesType';
// // import { useRouter } from 'next/router';

// export async function getServerSideProps(context: any) {
//   const { id } = context.query;
//   const parsedId = parseInt(id as string, 10);
//   const data = await getDetailClassApi(parsedId);
//   return {
//     props: {
//       data,
//     },
//   };
// }

// export default function EditClass({ data }: { data: DetailClassType }) {
export default function EditClass() {
  // const router = useRouter();
  // const { id } = router.query || [];
  // const parsedId = parseInt(id as string, 10);

  return (
    // <Layout>
    //   <EditMyClass buttonTitle="수정하기" getMyActivityData={data} />
    // </Layout>
    <div>fasfd</div>
  );
}
