import '@/styles/Home.module.css';
import { toast } from 'react-toastify';

export default function Home() {
  const notify = () => toast.success('toastify test!');
  const notify1 = () => toast.info('toastify test!');
  const notify2 = () => toast.error('toastify test!');
  const notify3 = () => toast.warning('toastify test!');

  return (
    <>
      <button className="buttonTest" onClick={notify}>
        success
      </button>
      <button className="buttonTest" onClick={notify1}>
        info
      </button>
      메인페이지
      <button className="buttonTest" onClick={notify2}>
        fail
      </button>
      <button className="buttonTest" onClick={notify3}>
        warnning
      </button>
    </>
  );
}
