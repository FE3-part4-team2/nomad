import { UseFormRegister, FieldErrors } from 'react-hook-form';
import styles from './imageInput.module.scss';
import subImageStyle from './subImageInput.module.scss';
import Image from 'next/image';
import { FormValues } from '../../MyClassTitle/MyClassTitle';
import { Dispatch, SetStateAction } from 'react';

interface EditSubImageInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageSrc: string[];
  setImgURL: React.Dispatch<React.SetStateAction<string[]>>;
  idWithApiImgURL: {
    id: number;
    imageUrl: string;
  }[];

  setIdWithApiImgURL: Dispatch<
    SetStateAction<
      {
        id: number;
        imageUrl: string;
      }[]
    >
  >;
  setDeleteSubImageId: Dispatch<SetStateAction<number[]>>;
}

export default function EditSubImageInput({
  id,
  register,
  errors,
  onChange,
  idWithApiImgURL,
  setIdWithApiImgURL,
  setDeleteSubImageId,
}: EditSubImageInputProps) {
  const handleDeleteButtonWithId = (clickedId: number) => {
    setDeleteSubImageId((prev) => [...prev, clickedId]);
    const gonnaDeleteArray = idWithApiImgURL?.filter(
      (idWithApiImg) => idWithApiImg.id !== clickedId,
    );
    const newArray = gonnaDeleteArray?.map(
      (item: { id: number; imageUrl: string }) => item.imageUrl,
    );
    if (newArray) {
      setIdWithApiImgURL(gonnaDeleteArray);
    }
  };

  return (
    <div>
      <label className={styles.inputTitle} htmlFor={id}>
        소개 이미지
      </label>
      {/* <div>{apiImgURL}</div> */}
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
            {...register('subImage', {
              validate: (fieldValue) => {
                return (
                  fieldValue.length < 5 ||
                  '소개 이미지는 최대 4개까지 선택 가능합니다'
                );
              },
            })}
          />
        </div>

        {idWithApiImgURL
          ? idWithApiImgURL.map((url) => (
              <div className={styles.imageWrapper} key={url.id}>
                <Image
                  className={styles.image}
                  src={url.imageUrl}
                  alt="선택한 이미지"
                  width={167}
                  height={167}
                />
                <Image
                  onClick={() => handleDeleteButtonWithId(url.id)}
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
      <div>*이미지는 최대 4개까지 등록 가능합니다.</div>
    </div>
  );
}
