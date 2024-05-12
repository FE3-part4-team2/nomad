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
import { useEffect, useState } from 'react';
import { getDetailClassApi, postAddMyActivityApi } from '@/apis/activitiesApi';
import { DetailClassType } from '@/types/activitiesType/ActivitiesType';

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
  getActivityInfo?: DetailClassType;
}

export default function MyClassTitle({
  buttonTitle,
  // getActivityInfo,
}: MyClassTitleProps) {
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

  const [getActivityInfo, setGetActivityInfo] = useState<DetailClassType>();
  const [getMainDateInfo, setGetMainDateInfo] = useState();
  const [getPlusDateInfo, setGetPlusDateInfo] = useState<
    {
      id: number;
      date: string;
      startTime: string;
      endTime: string;
    }[]
  >();

  useEffect(() => {
    const getDetailActivity = async () => {
      const data = await getDetailClassApi(826);
      const forPlusDate = data.schedules.slice();
      const plusDate = forPlusDate.shift();
      setGetMainDateInfo(data.schedules[0]);
      setGetPlusDateInfo(plusDate);
      console.log(data);
      console.log(data.schedules[0]);
      console.log('implus', forPlusDate);
      setGetActivityInfo(data);
      setBannerApiImgURL(data.bannerImageUrl);
    };
    getDetailActivity();
  }, []);

  // const [imgURL, setImgURL] = useState<string[]>([]);
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
          <TitleInput
            id="title"
            register={register}
            errors={errors}
            defaultValue={getActivityInfo?.title}
          />
          <CategoryInput
            id="category"
            register={register}
            errors={errors}
            defaultValue={getActivityInfo?.category}
          />
          <DescriptionInput
            id="description"
            register={register}
            errors={errors}
            defaultValue={getActivityInfo?.description}
          />
          <PriceInput
            id="price"
            register={register}
            errors={errors}
            defaultValue={getActivityInfo?.price}
          />
          <AddressInput
            id="address"
            register={register}
            errors={errors}
            defaultValue={getActivityInfo?.address}
          />
          <DateInput
            id="date"
            register={register}
            errors={errors}
            fields={fields}
            append={append}
            remove={remove}
            defaultValue={getMainDateInfo}
            plusDefaultValue={getPlusDateInfo}
          />
          <ImageInputContainer
            id="image"
            register={register}
            errors={errors}
            apiImgURL={bannerApiImgURL}
            setApiImgURL={setBannerApiImgURL}
            defaultValue={getActivityInfo?.bannerImageUrl}
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
