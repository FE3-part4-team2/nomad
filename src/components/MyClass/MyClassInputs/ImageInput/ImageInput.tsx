import { UseFormRegister, FieldErrors } from 'react-hook-form';
import styles from './imageInput.module.scss';
import Image from 'next/image';
import { FormValues } from '../../MyClassTitle/MyClassTitle';

interface ImageInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  bannerImgURL: string;
  onClick: () => void;
}

export default function ImageInput({
  id,
  register,
  errors,
  onChange,
  bannerImgURL,
  onClick,
}: ImageInputProps) {
  console.log(bannerImgURL);
  return (
    <div>
      <label className={styles.inputTitle} htmlFor={id}>
        배너 이미지
      </label>
      <div className={styles.imageContainer}>
        <div className={styles.addImgaeWapper} onChange={onChange}>
          <label className={styles.fakeInput} htmlFor="addImage">
            <Image
              src="/assets/icons/plus.svg"
              width={29.5}
              height={29.5}
              alt="이미지 추가하기 아이콘"
            />
            <div className={styles.addImageText}>이미지 등록</div>
          </label>
          <input
            id="addImage"
            type="file"
            accept="image/*"
            hidden
            {...register('image', {
              validate: (value) =>
                value.length > 0 || bannerImgURL || '배너 이미지는 필수입니다.',
            })}
          />
        </div>
        <div className={styles.imageWrapper}>
          {bannerImgURL ? (
            <>
              <Image
                className={styles.image}
                src={bannerImgURL}
                alt="선택한 이미지"
                width={167}
                height={167}
              />
              <Image
                onClick={onClick}
                className={styles.deleteImageButton}
                src="/assets/icons/delete-circle-btn.svg"
                alt="이미지 삭제 버튼"
                width={24}
                height={24}
              />
            </>
          ) : (
            ''
          )}
        </div>
      </div>
      {errors.image ? (
        <p className={styles.error}>{errors.image.message}</p>
      ) : (
        ''
      )}
    </div>
  );
}
