import { UseFormRegister, FieldErrors } from 'react-hook-form';
import styles from './categoryInput.module.scss';

import { FormValues } from '../../MyClassTitle/MyClassTitle';

interface CategoryInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export default function CategoryInput({
  id,
  register,
  errors,
}: CategoryInputProps) {
  return (
    <div>
      <select
        className={styles.input}
        id={id}
        {...register('category', {
          required: '카테고리 선택은 필수입니다.',
          validate: (fieldValue) => {
            return fieldValue !== '카테고리' || '카테고리 선택은 필수입니다.';
          },
        })}
      >
        <option value="카테고리">카테고리</option>
        <option value="문화 · 예술">문화 · 예술</option>
        <option value="식음료">식음료</option>
        <option value="스포츠">스포츠</option>
        <option value="투어">투어</option>
        <option value="관광">관광</option>
        <option value="웰빙">웰빙</option>
      </select>
      {errors ? <p className={styles.error}>{errors.category?.message}</p> : ''}
    </div>
  );
}
