const MockList = ['수정하기', '삭제하기'];
import styles from './dropDownList.module.scss';

interface DropDownListProps {
  isBig?: boolean;
  dropDownList: string[];
}

export default function DropDownList({
  isBig,
  dropDownList,
}: DropDownListProps) {
  return (
    <ul
      className={
        isBig
          ? styles.dropDownList_container_kebab
          : styles.dropDownList_container
      }
    >
      {dropDownList.map((item) => (
        <li className={styles.dropDownList}>{item}</li>
      ))}
    </ul>
  );
}
