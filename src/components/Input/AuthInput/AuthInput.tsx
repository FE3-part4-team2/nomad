import styles from './authInput.module.scss';

interface inputProps {
  name: string;
  placeholder: string;
  type: string;
}

export default function AuthInput({ name, placeholder, type }: inputProps) {
  return (
    <div className={styles.inputWrapper}>
      <span>{name}</span>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
