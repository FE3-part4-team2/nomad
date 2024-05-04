import styles from './dropDownList.module.scss';

interface DropDownListProps {
  isBig?: boolean;
  dropDownList: string[];
  onClick: () => void;
}

export default function DropDownList({
  isBig,
  dropDownList,
  onClick,
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
        <li className={styles.dropDownList} onClick={onClick}>
          {item}
        </li>
      ))}
    </ul>
  );
}
