import styles from './dropDownList.module.scss';

interface DropDownListProps {
  isBig?: boolean;
  dropDownList: string[];
  onClick: (item: string) => void;
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
      {dropDownList.map((item, index) => (
        <li
          key={index}
          className={styles.dropDownList}
          onClick={() => onClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
