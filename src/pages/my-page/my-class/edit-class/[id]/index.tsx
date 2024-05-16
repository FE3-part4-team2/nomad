import Layout from '@/components/Layout/Layout';
import EditMyClass from '@/components/MyClass/MyClassTitle/EditMyClass';
import { useRouter } from 'next/router';

export default function EditClass() {
  const router = useRouter();
  const { id } = router.query;
  const parsedId = parseInt(id as string, 10);

  return (
    <Layout>
      <EditMyClass buttonTitle="수정하기" classId={parsedId} />
    </Layout>
  );
}
