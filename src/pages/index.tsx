import Layout from '@/components/Layout/Layout';
import ProfileInfoChangeForm from '@/containers/ProfileInfoChangeForm/ProfileInfoChangeForm';

export default function Home() {
  return (
    <>
      <Layout>
        children
        <ProfileInfoChangeForm
          prevNickName="정동철"
          prevEmail="example@codeit.com"
        />
      </Layout>
    </>
  );
}
