import { UseFormRegister, FieldValues } from 'react-hook-form';
import styles from './addressInput.module.scss';

interface AddressInputProps {
  id?: string;
  register?: UseFormRegister<FieldValues>;
}

export default function AddressInput({ id }: AddressInputProps) {
  return (
    <div>
      <label className={styles.inputTitle} htmlFor={id}>
        주소
      </label>
      <input className={styles.input} id={id} type="text" placeholder="주소" />
    </div>
  );
}
