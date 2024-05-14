import DetailClass from '@/components/DetailClass/DetailClass';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { useRouter } from 'next/router';

export default function ClassInfo() {
  const router = useRouter();
  const { id } = router.query;
  const parsedId = parseInt(id as string, 10);
  return (
    <>
      <Header />
      <DetailClass id={parsedId} />
      <Footer />
    </>
  );
}
