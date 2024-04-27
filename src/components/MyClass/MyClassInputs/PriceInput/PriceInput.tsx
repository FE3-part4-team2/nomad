import { UseFormRegister, FieldValues } from 'react-hook-form';
import styles from './priceInput.module.scss';

interface PriceInputProps {
  id?: string;
  register?: UseFormRegister<FieldValues>;
}

export default function PriceInput({ id, register }: PriceInputProps) {
  return (
    <div>
      <label className={styles.inputTitle} htmlFor={id}>
        가격
      </label>
      <input className={styles.input} id={id} type="text" placeholder="가격" />
    </div>
  );
}
