import { useState } from 'react';
import styles from './dropDown.module.scss';
import DropDownList from './DropDownList';

interface DropDownProps {
  isBig?: boolean;
  dropDownName: string;
  dropDownList: string[];
  onClick: () => void;
}
// 메인화면에 들어가는 드랍다운은 작고 예약내역의 드랍다운은 커서 스타일을 다르게 해주기 위해서 isBig prop을 만들었습니다.
// 예약내역에서는 isBig = true로 주면 됩니다.
//dropDownName: 드랍다운 이름
//dropDownList: 드랍다운 리스트 array

export default function DropDown({
  isBig,
  dropDownName,
  dropDownList,
  onClick,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.center}>
      <div
        className={isBig ? styles.button_big : styles.button}
        onClick={handleOnClick}
      >
        <span className={styles.button_text}>{dropDownName}</span>
        <img
          className={isOpen ? styles.button_arrow : ''}
          src="/assets/icons/dropDown-arrow.svg"
          alt="드랍다운 화살표"
        />
      </div>

      {isOpen ? (
        <DropDownList
          dropDownList={dropDownList}
          isBig={isBig}
          onClick={onClick}
        />
      ) : (
        ''
      )}
    </div>
  );
}
