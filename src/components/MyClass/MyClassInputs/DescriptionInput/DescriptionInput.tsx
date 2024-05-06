import { UseFormRegister, FieldValues } from 'react-hook-form';
// import commonStyles from '../input.module.scss';
import styles from './DescriptionInput.module.scss';

interface DescriptionInputProps {
  id?: string;
  register?: UseFormRegister<FieldValues>;
}

export default function DescriptionInput({ id }: DescriptionInputProps) {
  return <textarea className={styles.textArea} id={id} placeholder="설명" />;
}
