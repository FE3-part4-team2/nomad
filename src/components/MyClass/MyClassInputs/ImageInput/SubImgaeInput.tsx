import { UseFormRegister, FieldErrors } from 'react-hook-form';
import styles from './imageInput.module.scss';
import subImageStyle from './subImageInput.module.scss';
import Image from 'next/image';
import { FormValues } from '../../MyClassTitle/MyClassTitle';
// import { url } from 'inspector';
// import { useState } from 'react';

interface SubImageInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageSrc: string[];
  setImgURL: React.Dispatch<React.SetStateAction<string[]>>;
  apiImgURL: string[];
  setApiImgURL: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SubImageInput({
  id,
  register,
  errors,
  onChange,
  // imageSrc,
  // setImgURL,
  apiImgURL,
  setApiImgURL,
}: SubImageInputProps) {
  const handleDeleteButton = (clickedId: string) => {
    // const newArray = imageSrc.filter((url) => url !== clickedId);
    // setImgURL(newArray);

    const newArray = apiImgURL.filter(
      (url) => String(url) !== String(clickedId),
    );
    console.log(newArray);
    setApiImgURL(newArray);

    // const newApiArray = apiImgURL.filter((url) =>
    //   url !== clickedId ? console.log(url) : console.log(url),
    // );

    // setApiImgURL(newApiArray);
  };

  return (
    <div>
      <label className={styles.inputTitle} htmlFor={id}>
        소개 이미지
      </label>
      <div>{apiImgURL}</div>
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
            {...register('subImage', {
              // required: {
              //   value: false,
              //   message: 'Email is invalid.',
              // },
              validate: (fieldValue) => {
                return (
                  fieldValue.length < 5 ||
                  '소개 이미지는 최대 4개까지 선택 가능합니다'
                );
              },
            })}
          />
        </div>

        {apiImgURL
          ? apiImgURL.map((url) => (
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
            ))
          : ''}
      </div>
      {errors ? <p className={styles.error}>{errors.subImage?.message}</p> : ''}
    </div>
  );
}
