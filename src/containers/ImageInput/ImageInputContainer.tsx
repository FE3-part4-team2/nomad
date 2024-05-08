import { postActivitiesImageApi } from '@/apis/activitiesApi';
import ImageInput from '@/components/MyClass/MyClassInputs/ImageInput/ImageInput';
import { FormValues } from '@/components/MyClass/MyClassTitle/MyClassTitle';
import React, { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface ImgaeInputContainerProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export default function ImageInputContainer({
  id,
  register,
  errors,
}: ImgaeInputContainerProps) {
  const [imgURL, setImgURL] = useState('');
  const [apiImgURL, setApiImgURL] = useState('');

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target?.files ?? [];
    const file = files[0];
    const formData = new FormData();
    formData.append('image', file);

    const fileRead = new FileReader();
    fileRead.readAsDataURL(file);
    fileRead.onload = function () {
      setImgURL(fileRead.result as string);
    };

    const data = await postActivitiesImageApi(formData);
    setApiImgURL(data.activityImageUrl);
  };

  const handleClickDeleteButton = () => {
    setImgURL('');
    setApiImgURL('');
  };

  return (
    <>
      <div>{apiImgURL}</div>
      <ImageInput
        id={id}
        register={register}
        errors={errors}
        onChange={handleImageChange}
        imageSrc={imgURL}
        onClick={handleClickDeleteButton}
      />
    </>
  );
}
