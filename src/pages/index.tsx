import styles from '@/styles/Home.module.css';
import Toast from '@/components/Toast/Toast';
import { LOGIN_MESSAGES } from '@/constants/message/index';

export default function Home() {
  //toast 테스트 지워도 됨!
  const toastType = 'success';
  const toastType1 = 'error';
  const toastType2 = 'warning';
  const toastType3 = 'info';

  return (
    <>
      메인 페이지
      <Toast type={toastType} message={LOGIN_MESSAGES.LOGIN_SUCCESS} />
      <Toast type={toastType1} message="login--fail" />
      <Toast type={toastType2} message="@@을 주의해 주세요" />
      <Toast type={toastType3} message="@@님은 엄청 나이스한걸 아시나요?" />
    </>
  );
}
