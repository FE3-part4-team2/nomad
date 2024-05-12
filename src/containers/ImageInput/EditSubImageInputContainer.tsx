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
  deleteSubImageId: number[];
  setAddSubImageUrl: Dispatch<SetStateAction<string[]>>;
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
  deleteSubImageId,
  setAddSubImageUrl,
}: SubImgaeInputContainerProps) {
  const [imgURL, setImgURL] = useState<string[]>([]);
  // const [apiImgURL, setApiImgURL] = useState<string[]>([]);

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

        // const file = imgFiles.item(i);
        // formData.append(`subImage${i}`, imgFiles[i]);
        console.log(imgFiles[i], i);
        const data = await postActivitiesImageApi(formData);
        setApiImgURL((prev) => [...prev, data.activityImageUrl]);
        setIdWithApiImgURL((prev) => [
          ...prev,
          { id: data.activityImageUrl, imageUrl: data.activityImageUrl },
        ]);
      }
    }

    // if (imgFiles) {
    //   imgFiles[0].map((img, index) => console.log(img, [index]));
    // }
  };

  return (
    <>
      <div>{apiImgURL}</div>
      <div>{imgURL}</div>
      <EditSubImageInput
        id={id}
        register={register}
        errors={errors}
        onChange={handleImageChange}
        imageSrc={imgURL}
        setImgURL={setImgURL}
        apiImgURL={apiImgURL}
        setApiImgURL={setApiImgURL}
        setIdWithApiImgURL={setIdWithApiImgURL}
        idWithApiImgURL={idWithApiImgURL}
        setDeleteSubImageId={setDeleteSubImageId}
        deleteSubImageId={deleteSubImageId}
        setAddSubImageUrl={setAddSubImageUrl}
      />
    </>
  );
}
