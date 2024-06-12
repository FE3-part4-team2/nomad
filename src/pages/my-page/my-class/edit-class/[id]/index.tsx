import { getDetailClassApi } from '@/apis/activitiesApi';
import Layout from '@/components/Layout/Layout';
import EditMyClass from '@/components/MyClass/MyClassTitle/EditMyClass';
import { DetailClassType } from '@/types/activitiesType/ActivitiesType';

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const parsedId = parseInt(id as string, 10);
  const data = await getDetailClassApi(parsedId);
  return {
    props: {
      data,
    },
  };
}

export default function EditClass({ data }: { data: DetailClassType }) {
  return (
    <Layout>
      <EditMyClass buttonTitle="수정하기" getMyActivityData={data} />
    </Layout>
  );
}
