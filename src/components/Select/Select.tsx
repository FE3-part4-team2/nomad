import styles from '@/components/Select/select.module.scss';

export default function Select() {
  return (
    <div id={styles.selectContainer}>
      <label htmlFor="class">체험명</label>
      <select id={styles.class}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
}
