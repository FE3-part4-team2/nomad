import { UseFormRegister, FieldValues } from 'react-hook-form';
import styles from './imageInput.module.scss';
import Image from 'next/image';

interface ImageInputProps {
  id?: string;
  register?: UseFormRegister<FieldValues>;
}

export default function ImageInput({ id }: ImageInputProps) {
  return (
    <div>
      <label className={styles.inputTitle} htmlFor={id}>
        배너 이미지
      </label>
      <div className={styles.imageContainer}>
        <div className={styles.addImgaeWapper}>
          <label className={styles.fakeInput} htmlFor="addImage">
            <Image
              src="/assets/icons/plus.svg"
              width={29.5}
              height={29.5}
              alt="이미지 추가하기 아이콘"
            />
            <div className={styles.addImageText}>이미지 등록</div>
          </label>
          <input id="addImage" type="file" accept="image/*" hidden />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/assets/images/bird.jpg"
            alt="새"
            width={167}
            height={167}
          />
          <Image
            className={styles.deleteImageButton}
            src="/assets/icons/delete-circle-btn.svg"
            alt="이미지 삭제 버튼"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
