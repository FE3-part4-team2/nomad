import React from 'react';
import styles from './Input.module.scss';

interface Props {
  label: string;
  placeholder: string;
  name?: string;
  type?: string;
  defaultValue?: string;
  error?: string;
}

// label: input label
//   name: input 의 이름, default인데 추가적으로 css를 추가적으로 넣고 싶으면 여기서 다른 input이름을 줘서 할것
//   type: default는 text인데 다른 타입을 주고싶으면 넣을것 ex) password
//   placeholder: 말그대로 placeholder
//   defaultValue: inputvalue의 초기값 ex) 닉네임 or 이메일
//   errorr: error일때 보여줄 css && message

const Input = ({
  label,
  placeholder,
  name = 'inputDefault',
  type,
  defaultValue,
  error,
  ...rest
}: Props) => {
  return (
    <div className={styles.textField}>
      <input
        className={`${name} ${error ? styles.error : ''}`}
        placeholder={placeholder}
        defaultValue={defaultValue ?? ''}
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
