import { UseFormRegister, FieldValues } from 'react-hook-form';
import styles from './titleInput.module.scss';

interface TitleInputProps {
  id?: string;
  register?: UseFormRegister<FieldValues>;
}

export default function TitleInput({ id }: TitleInputProps) {
  return (
    <input
      className={styles.input}
      id={id}
      type="text"
      placeholder="제목"
      //   {...register(id, {
      //     required: '제목 입력은 필수입니다.',
      //   })}
    />
  );
}
