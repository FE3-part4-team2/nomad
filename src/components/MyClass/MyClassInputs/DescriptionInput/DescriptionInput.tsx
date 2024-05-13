import { UseFormRegister, FieldErrors } from 'react-hook-form';
// import commonStyles from '../input.module.scss';
import styles from './DescriptionInput.module.scss';
import { FormValues } from '../../MyClassTitle/MyClassTitle';
interface DescriptionInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export default function DescriptionInput({
  id,
  register,
  errors,
}: DescriptionInputProps) {
  return (
    <div>
      <textarea
        className={styles.textArea}
        id={id}
        placeholder="설명"
        {...register('description', {
          required: '설명 입력은 필수입니다.',
        })}
      />
      {errors ? (
        <p className={styles.error}>{errors.description?.message}</p>
      ) : (
        ''
      )}
    </div>
  );
}
