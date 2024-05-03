import { UseFormRegister, FieldValues } from 'react-hook-form';
import styles from './imageInput.module.scss';
import subImageStyle from './subImageInput.module.scss';
import Image from 'next/image';
import { useState } from 'react';

interface SubImageInputProps {
  id?: string;
  register?: UseFormRegister<FieldValues>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageSrc: string[];
}

export default function SubImageInput({
  id,
  onChange,
  imageSrc,
}: SubImageInputProps) {
  const [imgURLArray, setImgURLArray] = useState(imageSrc);
  const handleDeleteButton = (clickedId: string) => {
    const newArray = imgURLArray.filter((url) => url !== clickedId);
    setImgURLArray(newArray);
  };

  return (
    <div>
      <label className={styles.inputTitle} htmlFor={id}>
        소개 이미지
      </label>
      <div className={subImageStyle.imageContainer}>
        <div className={styles.addImgaeWapper} onChange={onChange}>
          <label className={styles.fakeInput} htmlFor="addSubImage">
            <Image
              src="/assets/icons/plus.svg"
              width={29.5}
              height={29.5}
              alt="이미지 추가하기 아이콘"
            />
            <div className={styles.addImageText}>이미지 등록</div>
          </label>
          <input
            id="addSubImage"
            type="file"
            accept="image/*"
            hidden
            multiple
          />
        </div>
        {imgURLArray.map((url) => (
          <div className={styles.imageWrapper} key={url}>
            <Image
              className={styles.image}
              src={url}
              alt="선택한 이미지"
              width={167}
              height={167}
            />
            <Image
              onClick={() => handleDeleteButton(url)}
              className={styles.deleteImageButton}
              src="/assets/icons/delete-circle-btn.svg"
              alt="이미지 삭제 버튼"
              width={24}
              height={24}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
