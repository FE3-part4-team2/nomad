import DetailClass from '@/components/DetailClass/DetailClass';
import { useRouter } from 'next/router';

export default function ClassInfo() {
  const router = useRouter();
  const { id } = router.query;
  const parsedId = parseInt(id as string, 10);
  return (
    <>
      <DetailClass id={parsedId} />
    </>
  );
}
