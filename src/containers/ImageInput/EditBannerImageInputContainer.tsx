// import { postActivitiesImageApi } from '@/apis/activitiesApi';
import ImageInput from '@/components/MyClass/MyClassInputs/ImageInput/ImageInput';
import { FormValues } from '@/components/MyClass/MyClassTitle/MyClassTitle';
import React, { Dispatch, SetStateAction } from 'react';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface EditBannerImageInputContainerProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  bannerImgURL: string;
  setBannerImgURL: Dispatch<SetStateAction<string>>;

  setValue: UseFormSetValue<FormValues>;
  setFormData: Dispatch<SetStateAction<FormData | undefined>>;
}

export default function EditBannerImageInputContainer({
  id,
  register,
  errors,
  bannerImgURL,
  setBannerImgURL,
  setFormData,
  setValue,
}: EditBannerImageInputContainerProps) {
  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target?.files ?? [];
    const file = files[0];
    const formData = new FormData();
    formData.append('image', file);
    console.log(formData.values);
    const fileRead = new FileReader();
    fileRead.readAsDataURL(file);
    fileRead.onload = function () {
      setBannerImgURL(fileRead.result as string);
    };

    setFormData(formData);
  };

  const handleClickDeleteButton = () => {
    setValue('image', '');

    setBannerImgURL('');
  };

  return (
    <>
      <ImageInput
        id={id}
        register={register}
        errors={errors}
        onChange={handleImageChange}
        bannerImgURL={bannerImgURL}
        onClick={handleClickDeleteButton}
        imageSrc={''}
      />
    </>
  );
}
