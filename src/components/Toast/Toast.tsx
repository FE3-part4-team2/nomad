import '@/styles/Home.module.css';
import { toast } from 'react-toastify';
import { LOGIN_MESSAGES } from '@/constants/message/index';

export default function Toast({
  type,
  message,
}: {
  type: string;
  message: string;
}) {
  //   const notify = () => toast.success('toastify test!');
  //   const notify1 = () => toast.info('toastify test!');
  //   const notify2 = () => toast.error('toastify test!');
  //   const notify3 = () => toast.warning('toastify test!');

  //   const notifyLogin = () => toast.success(LOGIN_MESSAGES.LOGIN_SUCCESS);

  const handleToastEffect = () => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'info':
        toast.info(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'warning':
        toast.warning(message);
        break;
    }
  };

  return (
    <>
      {/* <button className="buttonTest" onClick={notify}>
        success
      </button>
      <button className="buttonTest" onClick={notify1}>
        info
      </button>
      <button className="buttonTest" onClick={notify2}>
        fail
      </button>
      <button className="buttonTest" onClick={notify3}>
        warnning
      </button>
      <button className="buttonTest" onClick={notifyLogin}>
        로그인 성공
      </button> */}
      <button className="buttonTest" onClick={handleToastEffect}>
        {type} 알림 보기
      </button>
    </>
  );
}
