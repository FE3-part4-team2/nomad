import { ReactNode } from 'react';
import styles from './modalBase.module.scss';
import Image from 'next/image';

/**
 *
 * @param title content/reservation에서만 입력. 상단 타이틀 입력(string)
 * @param children 컨텐츠, 버튼등 모달 안에 들어가는 레이아웃 작성
 * @param type alert(알림)/content(후기)/confirm(확인창)/reservation(예약)
 *
 */

interface ModalBaseProps {
  title?: string;
  children?: ReactNode;
  type: 'alert' | 'content' | 'confirm' | 'reservation';
}

export default function ModalBase({ title, children, type }: ModalBaseProps) {
  const modalClass = (type: string) => {
    switch (type) {
      case 'content':
        return `${styles.content}`;
      case 'confirm':
        return `${styles.confirm}`;
      case 'reservation':
        return `${styles.reservation}`;
      default:
        return `${styles.alert}`;
    }
  };
  const modalClassName = modalClass(type);

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <div className={modalClassName}>
          <div className={styles.top}>
            <span>{title}</span>
            <div className={styles.close}>
              <Image
                src="/assets/images/close.svg"
                alt="닫기"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
