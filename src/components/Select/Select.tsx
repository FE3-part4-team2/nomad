import styles from '@/components/Select/select.module.scss';

// export default function Select() {
//   return (
//     <select id={styles.class}>
//       <option value="1">체험명</option>
//       <option value="2">체험명2</option>
//     </select>
//   );
// }

export default function Select({ options }: { options: any[] }) {
  return (
    <div id={styles.selectContainer}>
      <label htmlFor="class">체험명</label>
      <select id={styles.class}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
