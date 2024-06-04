import {
  UseFormRegister,
  FieldErrors,
  // UseFormGetValues,
  UseFormSetValue,
} from 'react-hook-form';
import styles from './imageInput.module.scss';
import subImageStyle from './subImageInput.module.scss';
import Image from 'next/image';
import { FormValues } from '../../MyClassTitle/MyClassTitle';

interface SubImageInputProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // imageSrc: string[];
  // setImgURL: React.Dispatch<React.SetStateAction<string[]>>;
  subImgUrl: string[];
  setSubImgUrl: React.Dispatch<React.SetStateAction<string[]>>;
  setValue: UseFormSetValue<FormValues>;
  subImgFormData: FormData[];
  setSubImgFormData: React.Dispatch<React.SetStateAction<FormData[]>>;
}

export default function SubImageInput({
  id,
  register,
  errors,
  onChange,
  setValue,
  subImgUrl,
  setSubImgUrl,
  subImgFormData,
  setSubImgFormData,
}: SubImageInputProps) {
  subImgUrl.splice(4);

  // const handleDeleteButton = (clickedId: string) => {
  //   const newArray = subImgUrl.filter(
  //     (url) => String(url) !== String(clickedId),
  //   );
  //   const newFormDataArray = subImgFormData.filter(
  //     (url) => String(url) !== String(clickedId),
  //   );
  //   setSubImgUrl(newArray);
  //   setSubImgFormData(newFormDataArray);
  //   setValue('subImage', newArray);
  // };

  const handleDeleteButton = (clickedUrl: string) => {
    const newArray = subImgUrl.filter((url) => url !== clickedUrl); // 클릭된 url을 제외한 새로운 배열 생성
    const index = subImgUrl.findIndex((url) => url === clickedUrl); // 클릭된 url의 인덱스 찾기
    if (index !== -1) {
      // 인덱스가 -1이 아닌 경우에만 제거
      const newFormDataArray = [...subImgFormData]; // 기존의 배열을 복사하여 새로운 배열 생성
      newFormDataArray.splice(index, 1); // 해당 인덱스의 formData 제거
      setSubImgUrl(newArray); // 새로운 배열로 업데이트
      setSubImgFormData(newFormDataArray); // 새로운 formData 배열로 업데이트
      setValue('subImage', newArray); // subImage 값 업데이트
    }
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
            {...register('subImage', {
              validate: (fieldValue) => {
                return (
                  fieldValue.length < 5 ||
                  `소개 이미지는 최대 4개까지 선택 가능합니다 `
                );
              },
            })}
          />
        </div>

        {subImgUrl
          ? subImgUrl.map((url) => (
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
      <div>*이미지는 최대 4개까지 등록 가능합니다.</div>
    </div>
  );
}
