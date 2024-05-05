import { UseFormRegister, FieldErrors } from 'react-hook-form';
import styles from './titleInput.module.scss';

type FormValues = {
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  Date: string[];
  image: string;
  subImage?: string[];
};

interface TitleInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export default function TitleInput({ id, register, errors }: TitleInputProps) {
  return (
    <div>
      <input
        className={styles.input}
        id={id}
        type="text"
        placeholder="제목"
        {...register('title', {
          required: '제목 입력은 필수입니다.',
        })}
      />
      {errors ? <p className={styles.error}>{errors.title?.message}</p> : ''}
    </div>
  );
}
