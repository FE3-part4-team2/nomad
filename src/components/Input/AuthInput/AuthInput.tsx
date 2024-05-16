import styles from './authInput.module.scss';

interface inputProps {
  name: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e) => void;
}

export default function AuthInput({
  name,
  placeholder,
  type,
  value,
  onChange,
}: inputProps) {
  return (
    <div className={styles.inputWrapper}>
      <span>{name}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
