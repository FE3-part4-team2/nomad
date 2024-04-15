import styles from './modalBase.module.scss';

export default function ModalBase({ title, children, type }) {
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
          <div className={styles.background}>
            <div className={styles.top}>
              <h1>{title}</h1>
              <div className={styles.close}>X</div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

//더블체크 모달인지, 후기작성같은 애들인지
