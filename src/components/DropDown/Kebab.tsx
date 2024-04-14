import { useState } from 'react';
import DropDownList from './DropDownList';
import styles from './Kebab.module.scss';

export default function Kebab() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    console.log('hihi');
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.center}>
      <div>
        <img
          className={styles.kebab}
          onClick={handleOnClick}
          src="icons/kebab.svg"
          alt="케밥 아이콘"
        />
      </div>
      {isOpen ? <DropDownList isButton={false} /> : ''}
    </div>
  );
}
