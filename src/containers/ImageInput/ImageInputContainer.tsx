import { postActivitiesImageApi } from '@/apis/activitiesApi';
import ImageInput from '@/components/MyClass/MyClassInputs/ImageInput/ImageInput';
import { FormValues } from '@/components/MyClass/MyClassTitle/MyClassTitle';
import React, { useState } from 'react';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface ImgaeInputContainerProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  apiImgURL: string;
  setApiImgURL: React.Dispatch<React.SetStateAction<string>>;
  setValue: UseFormSetValue<FormValues>;
}

export default function ImageInputContainer({
  id,
  register,
  errors,
  apiImgURL,
  setApiImgURL,
  setValue,
}: ImgaeInputContainerProps) {
  const [imgURL, setImgURL] = useState('');

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
      setImgURL(fileRead.result as string);
    };

    const data = await postActivitiesImageApi(formData);
    setApiImgURL(data.activityImageUrl);
  };

  const handleClickDeleteButton = () => {
    setValue('image', '');
    setImgURL('');
    setApiImgURL('');
  };

  return (
    <>
      {/* <div>{apiImgURL}</div> */}
      <ImageInput
        id={id}
        register={register}
        errors={errors}
        onChange={handleImageChange}
        imageSrc={apiImgURL ? apiImgURL : imgURL}
        onClick={handleClickDeleteButton}
        bannerImgURL={''}
      />
    </>
  );
}
