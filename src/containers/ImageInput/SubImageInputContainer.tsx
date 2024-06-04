import { postActivitiesImageApi } from '@/apis/activitiesApi';
import SubImageInput from '@/components/MyClass/MyClassInputs/ImageInput/SubImgaeInput';
import { FormValues } from '@/components/MyClass/MyClassTitle/MyClassTitle';

import React, { Dispatch, SetStateAction, useState } from 'react';
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
  // const [imgURL, setImgURL] = useState<string[]>([]);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target?.files ?? [];
    const file = files[0];
    const formData = new FormData();
    // formData.append(`${file.name}`, file);
    formData.append(`image`, file);
    console.log(formData.values);
    const fileRead = new FileReader();
    fileRead.readAsDataURL(file);
    fileRead.onload = function () {
      // setBannerImgURL(fileRead.result as string);
      setSubImgUrl((prev) => [...prev, fileRead.result as string]);
    };

    setSubImgFormData((prev) => [...prev, formData]);
  };

  // //시작
  //   const handleImageChange = async (
  //     event: React.ChangeEvent<HTMLInputElement>,
  //   ) => {
  //     // setImgURL([]);

  //     // if (subImgUrl.length >= 4) {
  //     //   subImgUrl.splice(4);
  //     //   return;
  //     // }
  //     // setSubImgUrl([]);
  //     const imgFiles = event.target.files;

  //     const filesArray = imgFiles ? Array.from(imgFiles) : [];
  //     const selectedFiles: string[] = filesArray.map((file) => {
  //       return URL.createObjectURL(file);
  //     });
  //     // setImgURL((prev) => prev.concat(selectedFiles));
  //     setSubImgUrl((prev) => prev.concat(selectedFiles));

  //     // if (imgFiles) {
  //     //   for (let i = 0; i < imgFiles.length; i++) {
  //     //     const formData = new FormData();
  //     //     formData.append(`image`, imgFiles[i]);

  //     //     const data = await postActivitiesImageApi(formData);
  //     //     setApiImgURL((prev) => [...prev, data.activityImageUrl]);
  //     //   }
  //     // }
  //     if (subImgUrl) {
  //       if (subImgFormData.length < 5) {
  //         for (let i = 0; i < subImgUrl.length; i++) {
  //           const formData = new FormData();
  //           formData.append(`image${i}`, subImgUrl[i]);

  //           // const data = await postActivitiesImageApi(formData);
  //           // setApiImgURL((prev) => [...prev, data.activityImageUrl]);
  //           console.log(formData);
  //           setSubImgFormData((prev) => [...prev, formData]);
  //         }
  //       }
  //     }

  //     // console.log(formData);

  //     // if (subImgUrl) {
  //     //   for (let i = 0; i < subImgUrl.length; i++) {
  //     //     const formData = new FormData();
  //     //     formData.append(`image`, subImgUrl[i]);

  //     //     // const data = await postActivitiesImageApi(formData);
  //     //     // setApiImgURL((prev) => [...prev, data.activityImageUrl]);
  //     //     setSubImgFormData((prev) => [...prev, formData]);
  //     //   }
  //     // }
  //   };
  //   // console.log(formData);
  // //끝
  return (
    <>
      <SubImageInput
        id={id}
        register={register}
        errors={errors}
        onChange={handleImageChange}
        // imageSrc={imgURL}
        // setImgURL={setImgURL}
        subImgUrl={subImgUrl}
        setSubImgUrl={setSubImgUrl}
        subImgFormData={subImgFormData}
        setSubImgFormData={setSubImgFormData}
        setValue={setValue}
      />
    </>
  );
}
