import Button from '@/components/Button/Button';
import styles from './myClassTitle.module.scss';
import CategoryInput from '../MyClassInputs/CategoryInput/CategoryInput';
import DescriptionInput from '../MyClassInputs/DescriptionInput/DescriptionInput';
import PriceInput from '../MyClassInputs/PriceInput/PriceInput';
import DateInput from '../MyClassInputs/DateInput/DateInput';
import AddressInput from '../MyClassInputs/AddressInput/AddressInput';
import ImageInputContainer from '@/containers/ImageInput/ImageInputContainer';
import SubImageInputContainer from '@/containers/ImageInput/SubImageInputContainer';
import { useFieldArray, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import TitleInput from '../MyClassInputs/TitleInput/TitleInput';
import { useState } from 'react';
import { postAddMyActivityApi } from '@/apis/activitiesApi';

export interface FormValues {
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  mainSchedule: {
    date: string;
    startTime: string;
    endTime: string;
  };
  schedules: {
    date: string;
    startTime: string;
    endTime: string;
  }[];
  image: string;
  subImage: string[];
}

interface MyClassTitleProps {
  buttonTitle: string;
}

export default function MyClassTitle({ buttonTitle }: MyClassTitleProps) {
  const [getAddress, setGetAddress] = useState('');
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const { fields, append, remove } = useFieldArray({
    name: 'schedules',
    control: control,
  });

  const [apiImgURL, setApiImgURL] = useState<string[]>([]);
  const [bannerApiImgURL, setBannerApiImgURL] = useState('');
  const onSubmit = async (data: FormValues) => {
    const dateArray = [data.mainSchedule];
    const combinedDateArray = dateArray.concat(data.schedules);
    data.subImage = apiImgURL;
    data.image = bannerApiImgURL;
    const sendData = {
      title: data.title,
      category: data.category,
      description: data.description,
      address: data.address,
      price: Number(data.price),
      schedules: combinedDateArray,
      bannerImageUrl: data.image,
      subImageUrls: data.subImage,
    };
    const apiData = await postAddMyActivityApi(sendData);
    console.log(apiData);
  };

  return (
    <div>
      <form className={styles.myClassAddBox} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.myClassTitleWrapper}>
          <span className={styles.myClassSubtitle}>내 체험 등록</span>
          <div className={styles.button}>
            <Button buttonTitle={buttonTitle} radius={4} fontSize={1.6} />
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
          <AddressInput
            id="address"
            register={register}
            errors={errors}
            getAddress={getAddress}
            setGetAddress={setGetAddress}
          />
          <DateInput
            id="date"
            register={register}
            errors={errors}
            fields={fields}
            append={append}
            remove={remove}
          />
          <ImageInputContainer
            setValue={setValue}
            id="image"
            register={register}
            errors={errors}
            apiImgURL={bannerApiImgURL}
            setApiImgURL={setBannerApiImgURL}
          />
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
