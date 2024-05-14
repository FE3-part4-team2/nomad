import { postActivitiesImageApi } from '@/apis/activitiesApi';
import EditSubImageInput from '@/components/MyClass/MyClassInputs/ImageInput/EditSubImageInput';

import { FormValues } from '@/components/MyClass/MyClassTitle/MyClassTitle';

import React, { Dispatch, SetStateAction, useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface SubImgaeInputContainerProps {
  id: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  apiImgURL: string[];
  setApiImgURL: React.Dispatch<React.SetStateAction<string[]>>;
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
export default function EditSubImageInputContainer({
  id,
  register,
  errors,
  apiImgURL,
  setApiImgURL,
  idWithApiImgURL,
  setIdWithApiImgURL,
  setDeleteSubImageId,
}: SubImgaeInputContainerProps) {
  const [imgURL, setImgURL] = useState<string[]>([]);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (idWithApiImgURL.length >= 4) {
      return;
    }
    setImgURL([]);
    // setApiImgURL([]);
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
        setIdWithApiImgURL((prev) => [
          ...prev,
          { id: data.activityImageUrl, imageUrl: data.activityImageUrl },
        ]);
      }
    }
  };

  return (
    <>
      {/* <div>{apiImgURL}</div>
      <div>{imgURL}</div> */}
      <EditSubImageInput
        id={id}
        register={register}
        errors={errors}
        onChange={handleImageChange}
        imageSrc={imgURL}
        setImgURL={setImgURL}
        apiImgURL={apiImgURL}
        setIdWithApiImgURL={setIdWithApiImgURL}
        idWithApiImgURL={idWithApiImgURL}
        setDeleteSubImageId={setDeleteSubImageId}
      />
    </>
  );
}
