import React from 'react';
import styles from './input.module.scss';

interface Props {
  placeholder?: string;
  id?: string;
  classname?: string;
  type?: string;
  defaultValue?: string;
  error?: string;
  readOnly?: boolean;
}

/**
 * input에 사용되는 params
 * @param {string} classname - input 의 classname, default인데 추가적으로 css를 추가적으로 넣고 싶으면 여기서 다른 input이름을 줘서 할것
 * @param {string} id - input 의 id
 * @param {string} placeholder - placeholder: 말그대로 placeholder
 * @param {string} type - type: default는 text인데 다른 타입을 주고싶으면 넣을것 ex) password
 * @param {string} defaultValue - defaultValue: inputvalue의 초기값 ex) 닉네임 or 이메일
 * @param {string} error - errorr: error일때 보여줄 css && message
 * @param {string} readOnly - readonly: input의 값을 띄우기는하는데 값을 변경하지 않을때
 *
 */

const Input = ({
  placeholder,
  id,
  classname = 'inputDefault',
  type,
  defaultValue,
  error,
  readOnly,
  ...rest
}: Props) => {
  return (
    <div className={styles.textField}>
      <input
        id={id}
        className={`${styles[classname] || ''} ${error ? styles.error : ''}`}
        defaultValue={defaultValue ?? ''}
        {...rest}
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Input;
