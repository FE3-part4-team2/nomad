import { useState } from 'react';
import styles from './DropDown.module.scss';
import DropDownList from './DropDownList';

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    console.log('hihoi');
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.center}>
      <div className={styles.button} onClick={handleOnClick}>
        <span className={styles.button_text}>필터</span>
        <img
          className={isOpen ? styles.button_arrow : ''}
          src="icons/dropDown-arrow.svg"
          alt="드랍다운 화살표"
        />
      </div>

      {isOpen ? <DropDownList isButton={true} /> : ''}
    </div>
  );
}
