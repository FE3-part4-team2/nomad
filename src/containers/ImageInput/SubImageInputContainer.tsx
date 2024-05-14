import { postActivitiesImageApi } from '@/apis/activitiesApi';
import SubImageInput from '@/components/MyClass/MyClassInputs/ImageInput/SubImgaeInput';
import { FormValues } from '@/components/MyClass/MyClassTitle/MyClassTitle';

import React, { useState } from 'react';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface SubImgaeInputContainerProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  apiImgURL: string[];
  setApiImgURL: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SubImageInputContainer({
  id,
  register,
  errors,
  setValue,
  apiImgURL,
  setApiImgURL,
}: SubImgaeInputContainerProps) {
  const [imgURL, setImgURL] = useState<string[]>([]);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setImgURL([]);
    setApiImgURL([]);
    const imgFiles = event.target.files;

    const filesArray = imgFiles ? Array.from(imgFiles) : [];
    const selectedFiles: string[] = filesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImgURL((prev) => prev.concat(selectedFiles));

    if (imgFiles) {
      for (let i = 0; i < imgFiles.length; i++) {
        const formData = new FormData();
        formData.append(`image`, imgFiles[i]);

        const data = await postActivitiesImageApi(formData);
        setApiImgURL((prev) => [...prev, data.activityImageUrl]);
      }
    }
  };

  return (
    <>
      <div>{apiImgURL}</div>
      <div>{imgURL}</div>
      <SubImageInput
        id={id}
        register={register}
        errors={errors}
        onChange={handleImageChange}
        imageSrc={imgURL}
        setImgURL={setImgURL}
        apiImgURL={apiImgURL}
        setApiImgURL={setApiImgURL}
        setValue={setValue}
      />
    </>
  );
}
