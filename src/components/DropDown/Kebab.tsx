import { useState } from 'react';
import DropDownList from './DropDownList';
import styles from './kebab.module.scss';

interface KebabProps {
  dropDownList: string[];
  onClick: (item: string) => void;
}

export default function Kebab({ dropDownList, onClick }: KebabProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.center}>
      <div className={styles.icon_wrapper}>
        <img
          className={styles.kebab}
          onClick={handleOnClick}
          src="/assets/icons/kebab.svg"
          alt="케밥 아이콘"
        />
      </div>
      {isOpen ? (
        <DropDownList
          isBig={true}
          dropDownList={dropDownList}
          onClick={onClick}
        />
      ) : (
        ''
      )}
    </div>
  );
}
