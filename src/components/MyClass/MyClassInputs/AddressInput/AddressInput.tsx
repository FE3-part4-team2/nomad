import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import DaumPostcode from 'react-daum-postcode';
import styles from './addressInput.module.scss';
import { Dispatch, SetStateAction, useState } from 'react';
import { FormValues } from '../../MyClassTitle/MyClassTitle';

interface AddressInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  setGetAddress: Dispatch<SetStateAction<string>>;
  getAddress: string;
  setValue: UseFormSetValue<FormValues>;
}

export default function AddressInput({
  id,
  register,
  errors,
  getAddress,
  setGetAddress,
  setValue,
}: AddressInputProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onCompleteDaumPostcode = (data: { address: string }) => {
    setGetAddress(data.address);
    setValue('address', data.address, { shouldDirty: true });
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
          value={getAddress}
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
      {errors && !getAddress ? (
        <p className={styles.error}>{errors.address?.message}</p>
      ) : (
        ''
      )}
    </div>
  );
}
