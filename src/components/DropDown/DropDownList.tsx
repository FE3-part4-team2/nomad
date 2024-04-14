const MockList = ['수정하기', '삭제하기'];
import styles from './DropDownList.module.scss';

interface DropDownListProps {
  isButton?: boolean;
}

export default function DropDownList({ isButton }: DropDownListProps) {
  return (
    <ul
      className={
        isButton
          ? styles.dropDownList_container
          : styles.dropDownList_container_kebab
      }
    >
      {MockList.map((item) => (
        <li className={styles.dropDownList}>{item}</li>
      ))}
    </ul>
  );
}
