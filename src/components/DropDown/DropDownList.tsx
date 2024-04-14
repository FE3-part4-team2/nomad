const MockList = ['수정하기', '삭제하기'];
import styles from './DropDownList.module.scss';
export default function DropDownList() {
  return (
    <ul className={styles.dropDownList_container}>
      {MockList.map((item) => (
        <li className={styles.dropDownList}>{item}</li>
      ))}
    </ul>
  );
}
