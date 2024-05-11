import Button from '@/components/Button/Button';
import styles from './myClassTitle.module.scss';
import CategoryInput from '../MyClassInputs/CategoryInput/CategoryInput';
import DescriptionInput from '../MyClassInputs/DescriptionInput/DescriptionInput';
import PriceInput from '../MyClassInputs/PriceInput/PriceInput';
import DateInput from '../MyClassInputs/DateInput/DateInput';
import AddressInput from '../MyClassInputs/AddressInput/AddressInput';
import ImageInputContainer from '@/containers/ImageInput/ImageInputContainer';
import SubImageInputContainer from '@/containers/ImageInput/SubImageInputContainer';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import TitleInput from '../MyClassInputs/TitleInput/TitleInput';
import { useState } from 'react';

export interface FormValues {
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  date: string[];
  startTime: string;
  endTime: string;
  plusDate: string;
  plusStartTime: string;
  plusEndTime: string;
  image: string;
  subImage: string[];
}

export default function MyClassTitle() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  // const [imgURL, setImgURL] = useState<string[]>([]);
  const [apiImgURL, setApiImgURL] = useState<string[]>([]);

  const onSubmit = (data: FormValues) => {
    // price number로 바꿔줘야함
    data.subImage = apiImgURL;
    console.log(data);
  };

  return (
    <div>
      <form className={styles.myClassAddBox} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.myClassTitleWrapper}>
          <span className={styles.myClassSubtitle}>내 체험 등록</span>
          <div className={styles.button}>
            <Button buttonTitle="등록하기" radius={4} fontSize={1.6} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <TitleInput id="title" register={register} errors={errors} />
          <CategoryInput id="category" register={register} errors={errors} />
          <DescriptionInput
            id="description"
            register={register}
            errors={errors}
          />
          <PriceInput id="price" register={register} errors={errors} />
          <AddressInput id="address" register={register} errors={errors} />
          <DateInput id="date" register={register} errors={errors} />
          <ImageInputContainer id="image" register={register} errors={errors} />
          <SubImageInputContainer
            id="subImage"
            register={register}
            errors={errors}
            setValue={setValue}
            apiImgURL={apiImgURL}
            setApiImgURL={setApiImgURL}
          />
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}
