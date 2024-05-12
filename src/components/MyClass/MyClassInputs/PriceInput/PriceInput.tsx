import { UseFormRegister, FieldErrors } from 'react-hook-form';
import styles from './priceInput.module.scss';
import { FormValues } from '../../MyClassTitle/MyClassTitle';
interface PriceInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  defaultValue?: number;
}

export default function PriceInput({
  id,
  register,
  errors,
  defaultValue,
}: PriceInputProps) {
  return (
    <div>
      <label className={styles.inputTitle} htmlFor={id}>
        가격
      </label>
      <input
        value={defaultValue}
        className={styles.input}
        id={id}
        type="number"
        placeholder="가격"
        {...register('price', {
          required: '가격 입력은 필수입니다.',
        })}
      />
      {errors ? <p className={styles.error}>{errors.price?.message}</p> : ''}
    </div>
  );
}
