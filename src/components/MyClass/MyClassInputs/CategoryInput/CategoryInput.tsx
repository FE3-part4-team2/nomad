import { UseFormRegister, FieldValues } from 'react-hook-form';
import styles from './categoryInput.module.scss';

interface CategoryInputProps {
  id?: string;
  register?: UseFormRegister<FieldValues>;
}

export default function CategoryInput({ id }: CategoryInputProps) {
  return (
    <input
      className={styles.input}
      id={id}
      type="text"
      placeholder="카테고리"
      //   {...register(id, {
      //     required: '제목 입력은 필수입니다.',
      //   })}
    />
  );
}
