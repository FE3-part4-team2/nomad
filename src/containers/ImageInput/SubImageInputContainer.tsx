import SubImageInput from '@/components/MyClass/MyClassInputs/ImageInput/SubImgaeInput';
import { FormValues } from '@/components/MyClass/MyClassTitle/MyClassTitle';

import React, { Dispatch, SetStateAction } from 'react';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface SubImgaeInputContainerProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  subImgUrl: string[];
  setSubImgUrl: Dispatch<SetStateAction<string[]>>;
  subImgFormData: FormData[];
  setSubImgFormData: Dispatch<SetStateAction<FormData[]>>;
}

export default function SubImageInputContainer({
  id,
  register,
  errors,
  setValue,
  subImgUrl,
  setSubImgUrl,
  subImgFormData,
  setSubImgFormData,
}: SubImgaeInputContainerProps) {
  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target?.files ?? [];
    const file = files[0];
    const formData = new FormData();
    formData.append(`image`, file);
    const fileRead = new FileReader();
    fileRead.readAsDataURL(file);
    fileRead.onload = function () {
      setSubImgUrl((prev) => [...prev, fileRead.result as string]);
    };

    setSubImgFormData((prev) => [...prev, formData]);
  };

  return (
    <>
      <SubImageInput
        id={id}
        register={register}
        errors={errors}
        onChange={handleImageChange}
        subImgUrl={subImgUrl}
        setSubImgUrl={setSubImgUrl}
        subImgFormData={subImgFormData}
        setSubImgFormData={setSubImgFormData}
        setValue={setValue}
      />
    </>
  );
}
