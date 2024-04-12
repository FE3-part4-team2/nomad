import styles from '@/styles/Home.module.css';
import Toast from '@/components/Toast/Toast';
import { LOGIN_MESSAGES } from '@/constants/message/index';

export default function Home() {
  const toastType = 'success';
  const toastType1 = 'error';

  return (
    <>
      <Toast type={toastType} message={LOGIN_MESSAGES.LOGIN_SUCCESS} />
      <Toast type={toastType1} message="login--fail" />
    </>
  );
}
