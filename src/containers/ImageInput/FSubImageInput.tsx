import SubImageInput from '@/components/MyClass/MyClassInputs/ImageInput/SubImgaeInput';

import React, { useState } from 'react';

export default function FSubImageInput() {
  const [imgURL, setImgURL] = useState<string[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgFiles = event.target.files;
    console.log(imgFiles);
    const filesArray = imgFiles ? Array.from(imgFiles) : [];
    // console.log(files[0].name);
    // const img = URL.createObjectURL(file);
    const selectedFiles: string[] = filesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImgURL((prev) => prev.concat(selectedFiles));
  };

  //   const handleClickDeleteButton = (e:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
  //     console.log(e.previousElementSibling);
  //     // setImgURL([]);
  //   };

  return (
    <>
      <div>{imgURL}</div>
      <SubImageInput onChange={handleImageChange} imageSrc={imgURL} />
    </>
  );
}
