import ImageInput from '@/components/MyClass/MyClassInputs/ImageInput/ImageInput';
import React, { useState } from 'react';

export default function FImageInput() {
  const [imgURL, setImgURL] = useState('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files ?? [];
    const file = files[0];
    // console.log(files[0].name);
    // const img = URL.createObjectURL(file);
    const fileRead = new FileReader();
    fileRead.readAsDataURL(file);
    fileRead.onload = function () {
      setImgURL(fileRead.result as string);
    };
  };

  const handleClickDeleteButton = () => {
    setImgURL('');
  };

  return (
    <>
      <ImageInput
        onChange={handleImageChange}
        imageSrc={imgURL}
        onClick={handleClickDeleteButton}
      />
    </>
  );
}
