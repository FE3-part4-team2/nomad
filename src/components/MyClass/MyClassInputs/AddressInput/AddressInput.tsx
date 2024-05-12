import { FieldErrors, UseFormRegister } from 'react-hook-form';
import DaumPostcode from 'react-daum-postcode';
import styles from './addressInput.module.scss';
import { useState } from 'react';
import { FormValues } from '../../MyClassTitle/MyClassTitle';

interface AddressInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  defaultValue?: string;
}

export default function AddressInput({
  id,
  register,
  errors,
  defaultValue,
}: AddressInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [getAddress, setGetAddress] = useState('');
  const onCompleteDaumPostcode = (data: { address: string }) => {
    setGetAddress(data.address);
  };

  const toggleHandler = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };

  const closeHandler = (state: string) => {
    if (state === 'FORCE_CLOSE') {
      setIsOpen(false);
    } else if (state === 'COMPLETE_CLOSE') {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <label className={styles.inputTitle} htmlFor={id}>
        주소
      </label>
      <div className={styles.inputButtonWrapper}>
        <input
          className={styles.input}
          id={id}
          type="text"
          placeholder="주소"
          value={defaultValue ? defaultValue : getAddress}
          {...register('address', {
            required: '주소 입력은 필수입니다.',
          })}
        />
        <button className={styles.addressButton} onClick={toggleHandler}>
          주소 찾기
        </button>
      </div>

      {isOpen && (
        <div>
          <DaumPostcode
            onComplete={onCompleteDaumPostcode}
            onClose={closeHandler}
          />
        </div>
      )}
      {errors ? <p className={styles.error}>{errors.address?.message}</p> : ''}
    </div>
  );
}
