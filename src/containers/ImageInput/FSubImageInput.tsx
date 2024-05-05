import SubImageInput from '@/components/MyClass/MyClassInputs/ImageInput/SubImgaeInput';

import React, { useState } from 'react';

export default function FSubImageInput() {
  const [imgURL, setImgURL] = useState<string[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImgURL([]);
    const imgFiles = event.target.files;
    console.log(imgFiles);
    if (imgFiles!.length > 4) {
      console.log('소개 이미지는 최대 4개까지 선택 가능합니다');
      //이 부분 나중에 에러처리 해줘야합니다
    }
    const filesArray = imgFiles ? Array.from(imgFiles) : [];
    const selectedFiles: string[] = filesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImgURL((prev) => prev.concat(selectedFiles));
  };

  return (
    <>
      <div>{imgURL}</div>
      <SubImageInput
        onChange={handleImageChange}
        imageSrc={imgURL}
        setImgURL={setImgURL}
      />
    </>
  );
}
