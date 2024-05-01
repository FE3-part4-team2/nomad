import React from 'react';
import styles from './input.module.scss';

interface Props {
  placeholder: string;
  classname?: string;
  type?: string;
  defaultValue?: string;
  error?: string;
}

/**
 * input에 사용되는 params
 * @param {string} classname - input 의 이름, default인데 추가적으로 css를 추가적으로 넣고 싶으면 여기서 다른 input이름을 줘서 할것
 * @param {string} placeholder - placeholder: 말그대로 placeholder
 * @param {string} type - type: default는 text인데 다른 타입을 주고싶으면 넣을것 ex) password
 * @param {string} defaultValue - defaultValue: inputvalue의 초기값 ex) 닉네임 or 이메일
 * @param {string} error - errorr: error일때 보여줄 css && message
 */

const Input = ({
  placeholder,
  classname = 'inputDefault',
  // type,
  defaultValue,
  error,
  ...rest
}: Props) => {
  return (
    <div className={styles.textField}>
      <input
        // className={`${name} ${error ? styles.error : ''}`}
        className={`${styles[classname] || ''} ${error ? styles.error : ''}`}
        placeholder={placeholder}
        defaultValue={defaultValue ?? ''}
        {...rest}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
