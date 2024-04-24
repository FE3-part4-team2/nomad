import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './controlInput.module.scss';

interface ControlInputProps<T> {
  control: any;
  name: string;
  rules?: any;
  defaultValue?: string;
  [key: string]: any;
}

const ControlInput = <T,>({
  control,
  name,
  rules,
  defaultValue,
  ...props
}: ControlInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || ''}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className={styles.textField}>
          <input
            {...field}
            {...props}
            className={error ? styles.error : ''}
            id={name}
          />
          <label htmlFor={name}>{props.label}</label>
          {error && (
            <div className={styles['error-message']}>{error.message}</div>
          )}
        </div>
      )}
    />
  );
};

export default ControlInput;
