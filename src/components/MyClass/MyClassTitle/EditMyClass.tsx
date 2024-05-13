import Button from '@/components/Button/Button';
import styles from './myClassTitle.module.scss';
import CategoryInput from '../MyClassInputs/CategoryInput/CategoryInput';
import DescriptionInput from '../MyClassInputs/DescriptionInput/DescriptionInput';
import PriceInput from '../MyClassInputs/PriceInput/PriceInput';
import AddressInput from '../MyClassInputs/AddressInput/AddressInput';
import ImageInputContainer from '@/containers/ImageInput/ImageInputContainer';
import { useFieldArray, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import TitleInput from '../MyClassInputs/TitleInput/TitleInput';
import { useEffect, useState } from 'react';
import { getDetailClassApi } from '@/apis/activitiesApi';
import { DetailClassType } from '@/types/activitiesType/ActivitiesType';
import { patchEditMyActivityApi } from '@/apis/myActivitiesApi';
import EditSubImageInputContainer from '@/containers/ImageInput/EditSubImageInputContainer';
import EditDateInput from '../MyClassInputs/DateInput/EditDateInput';

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

export default function EditMyClass({ buttonTitle }: MyClassTitleProps) {
  const [deleteSubImageId, setDeleteSubImageId] = useState<number[]>([]);
  const [getActivityInfo, setGetActivityInfo] = useState<DetailClassType>();
  const [getPlusDateInfo, setGetPlusDateInfo] = useState<
    {
      id: number;
      date: string;
      startTime: string;
      endTime: string;
    }[]
  >([]);
  const [getAddress, setGetAddress] = useState('');
  const [idWithApiImgURL, setIdWithApiImgURL] = useState<
    { id: number; imageUrl: string }[]
  >([]);

  const [gonnaDeleteId, setGonnaDeleteId] = useState<number[]>([]);

  useEffect(() => {
    const getDetailActivity = async () => {
      const data = await getDetailClassApi(830);
      const forPlusDate = data.schedules.slice();
      forPlusDate.shift();
      setGetPlusDateInfo(forPlusDate);
      setGetActivityInfo(data);
      setBannerApiImgURL(data.bannerImageUrl);

      const imgArray = data.subImages;
      const newImgArray = imgArray.map(
        (item: { id: number; imageUrl: string }) => item.imageUrl,
      );
      setApiImgURL(newImgArray);
      setIdWithApiImgURL(imgArray);
      setGetAddress(data.address);
    };
    getDetailActivity();
  }, []);

  //추가할 이미지의 url만 필터 후 imageUrl만 필터함 => subImageUrlsToAdd에 들어갈 데이터
  const addSubImages = idWithApiImgURL.filter(
    (item) => typeof item.id === 'string',
  );
  const addSubImgUrl = addSubImages.map(
    (item: { id: number; imageUrl: string }) => item.imageUrl,
  );

  //지울 이미지의 id만 필터 => subImageIdsToRemove에 들어갈 데이터
  const deleteSubImge = deleteSubImageId.filter(
    (item) => typeof item === 'number',
  );

  //삭제할 예약가능시간 id만 필터 => scheduleIdsToRemove에 들어갈 데이터
  const deleteDateId = gonnaDeleteId.filter((item) => typeof item === 'number');

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (getActivityInfo) {
      setValue('title', getActivityInfo.title);
      setValue('category', getActivityInfo.category);
      setValue('description', getActivityInfo.description);
      setValue('price', getActivityInfo.price);
      setValue('address', getActivityInfo.address);
      setValue('mainSchedule', getActivityInfo.schedules[0]);
      setValue('image', getActivityInfo.bannerImageUrl);
    }
  }, [getActivityInfo, setValue]);

  const { fields, append, remove } = useFieldArray({
    name: 'schedules',
    control: control,
  });

  //이미지 미리보기
  const [apiImgURL, setApiImgURL] = useState<string[]>([]);
  const [bannerApiImgURL, setBannerApiImgURL] = useState('');

  const onSubmit = async (data: FormValues) => {
    // data.subImage = apiImgURL;
    data.image = bannerApiImgURL;

    const id = getActivityInfo!.id;
    const editMyActivity = {
      title: data.title,
      category: data.category,
      description: data.description,
      address: data.address,
      price: Number(data.price),
      bannerImageUrl: data.image,
      subImageIdsToRemove: deleteSubImge,
      subImageUrlsToAdd: addSubImgUrl,
      scheduleIdsToRemove: deleteDateId,
      schedulesToAdd: data.schedules,
    };
    const apiData = await patchEditMyActivityApi(id, editMyActivity);
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
          <EditDateInput
            id="date"
            register={register}
            errors={errors}
            fields={fields}
            append={append}
            remove={remove}
            plusDefaultValue={getPlusDateInfo}
            setGetPlusDateInfo={setGetPlusDateInfo}
            setGonnaDeleteId={setGonnaDeleteId}
          />
          <ImageInputContainer
            id="image"
            register={register}
            errors={errors}
            apiImgURL={bannerApiImgURL}
            setApiImgURL={setBannerApiImgURL}
            setValue={setValue}
          />
          <EditSubImageInputContainer
            id="subImage"
            register={register}
            errors={errors}
            apiImgURL={apiImgURL}
            setApiImgURL={setApiImgURL}
            setIdWithApiImgURL={setIdWithApiImgURL}
            idWithApiImgURL={idWithApiImgURL}
            setDeleteSubImageId={setDeleteSubImageId}
          />
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}
