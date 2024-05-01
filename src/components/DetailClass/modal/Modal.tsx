import ReactDOM from 'react-dom';
import Button from '@/components/Button/Button';
import styles from './modal.module.scss';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  setIsOpenModal:any;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  setIsOpenModal,
}) => {
  if (!isOpen) return null;

  const closeModal = (e:any) => {
    e.stopPropagation();
    setIsOpenModal(false);
  };

  const modal = (
    <div className={styles.backContainer}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
          <button onClick={closeModal} className={styles.closeButton}>
            <Image
              src="/assets/icons/close.svg"
              alt="닫기 아이콘"
              width={40}
              height={40}
            />
          </button>
        </div>
        <div className={styles.contentContainer}>{children}</div>
        <div className={styles.buttonContainer}>
          <Button
            status="disable"
            buttonTitle="예약"
            radius={6}
            fontSize={1.6}
            className={styles.submitButton}
          />
        </div>
      </div>
      //{' '}
    </div>
  );
  return ReactDOM.createPortal(modal, document.body);
};

export default Modal;
