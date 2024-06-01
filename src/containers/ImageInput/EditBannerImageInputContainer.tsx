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
  //   apiImgURL: string;
  //   setApiImgURL: React.Dispatch<React.SetStateAction<string>>;
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
  //   apiImgURL,
  //   setApiImgURL,
  setValue,
}: EditBannerImageInputContainerProps) {
  //   const [imgURL, setImgURL] = useState('');

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
      //   setImgURL(fileRead.result as string);
      setBannerImgURL(fileRead.result as string);
    };
    //formdate담는 state를 하나 만들어서 걔한테 넘겨주고 서브밋 누르면 api호출하게 하기
    setFormData(formData);
    // const data = await postActivitiesImageApi(formData);
    // setApiImgURL(data.activityImageUrl);
  };

  const handleClickDeleteButton = () => {
    setValue('image', '');
    // setImgURL('');
    // setApiImgURL('');
    setBannerImgURL('');
  };

  return (
    <>
      {/* <div>{apiImgURL}</div> */}
      <div>{bannerImgURL}</div>
      <ImageInput
        id={id}
        register={register}
        errors={errors}
        onChange={handleImageChange}
        // imageSrc={bannerImgURL ? bannerImgURL : imgURL}
        bannerImgURL={bannerImgURL}
        onClick={handleClickDeleteButton}
        setValue={setValue}
      />
    </>
  );
}
