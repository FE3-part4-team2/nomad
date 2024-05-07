import styles from '@/components/Select/select.module.scss';
import { idAtom } from '@/store/idAtom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

// export default function Select() {
//   return (
//     <select id={styles.class}>
//       <option value="1">체험명</option>
//       <option value="2">체험명2</option>
//     </select>
//   );
// }

export default function Select({ options }: { options: any[] }) {
  const [ID, setID] = useRecoilState(idAtom);
  useEffect(() => {
    if (ID == 0 && options.length > 0) {
      setID(options[0].id);
    }
  }, []);
  const handleChange = (event: any) => {
    setID(event.target.value);
  };
  console.log(ID);

  return (
    <div id={styles.selectContainer}>
      <label htmlFor="class">체험명</label>
      <select id={styles.class} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
