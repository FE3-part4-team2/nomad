import Button from '@/components/Button/Button';
import styles from './myClassTitle.module.scss';
import CategoryInput from '../MyClassInputs/CategoryInput/CategoryInput';
import DescriptionInput from '../MyClassInputs/DescriptionInput/DescriptionInput';
import PriceInput from '../MyClassInputs/PriceInput/PriceInput';
import DateInput from '../MyClassInputs/DateInput/DateInput';
import AddressInput from '../MyClassInputs/AddressInput/AddressInput';
import ImageInputContainer from '@/containers/ImageInput/ImageInputContainer';
// import SubImageInputContainer from '@/containers/ImageInput/SubImageInputContainer';
import { useFieldArray, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import TitleInput from '../MyClassInputs/TitleInput/TitleInput';
import { useEffect, useState } from 'react';
import { getDetailClassApi, postAddMyActivityApi } from '@/apis/activitiesApi';
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
  const [addSubImageUrl, setAddSubImageUrl] = useState<string[]>([]);

  console.log(deleteSubImageId);
  const [getActivityInfo, setGetActivityInfo] = useState<DetailClassType>();
  const [getMainDateInfo, setGetMainDateInfo] = useState();
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
  console.log(idWithApiImgURL);
  const addSubImages = idWithApiImgURL.filter(
    (item) => typeof item.id === 'string',
  );
  const addSubImgUrl = addSubImages.map(
    (item: { id: number; imageUrl: string }) => item.imageUrl,
  );

  const deleteSubImge = deleteSubImageId.filter(
    (item) => typeof item === 'number',
  );

  console.log('얘를 추가할 이미지에 주면된다', addSubImgUrl);
  // console.log('얘를 지울거 서브이미지 아이디에 주면 되고', deleteSubImageId);
  console.log('얘를 지울거 서브이미지 아이디에 주면 되고', deleteSubImge);
  // console.log('얘를 지울거 서브이미지 아이디에 주면 되고', delteSubImgUrl);
  useEffect(() => {
    const getDetailActivity = async () => {
      const data = await getDetailClassApi(830);
      const forPlusDate = data.schedules.slice();
      const plusDate = forPlusDate.shift();
      setGetMainDateInfo(data.schedules[0]);
      setGetPlusDateInfo(forPlusDate);
      console.log(data);
      console.log(data.schedules[0]);
      console.log('implus', forPlusDate);
      console.log('implus', forPlusDate);
      console.log(plusDate);
      setGetActivityInfo(data);
      setBannerApiImgURL(data.bannerImageUrl);
      const imgArray = data.subImages;
      const newImgArray = imgArray.map(
        (item: { id: number; imageUrl: string }) => item.imageUrl,
      );
      console.log(newImgArray);
      setApiImgURL(newImgArray);
      setIdWithApiImgURL(imgArray);

      setGetAddress(data.address);
    };
    getDetailActivity();
  }, []);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: async () => {
      const data: DetailClassType = await getDetailClassApi(830);
      const forPlusDate = data.schedules.slice();
      const plusDate = forPlusDate.shift();
      console.log(plusDate);
      // setGetPlusDateInfo(plusDate);
      // console.log(data);
      // console.log(data.schedules[0]);
      // console.log('implus', forPlusDate);

      setGetActivityInfo(data);
      setBannerApiImgURL(data.bannerImageUrl);
      return {
        title: data.title,
        category: data.category,
        description: data.description,
        price: data.price,
        address: data.address,
        mainSchedule: {
          date: data.schedules[0].date,
          startTime: data.schedules[0].startTime,
          endTime: data.schedules[0].endTime,
        },
      };
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'schedules',
    control: control,
  });

  // const [imgURL, setImgURL] = useState<string[]>([]);
  const [apiImgURL, setApiImgURL] = useState<string[]>([]);
  const [bannerApiImgURL, setBannerApiImgURL] = useState('');
  const onSubmit = async (data: FormValues) => {
    console.log(data);
    const dateArray = [data.mainSchedule];
    const combinedDateArray = dateArray.concat(data.schedules);
    data.subImage = apiImgURL;
    data.image = bannerApiImgURL;
    console.log('새로 얻은 값', data.schedules);
    const id = getActivityInfo!.id;
    console.log(id);
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

  const [gonnaDeleteId, setGonnaDeleteId] = useState<number[]>([]);
  const deleteDateId = gonnaDeleteId.filter((item) => typeof item === 'number');
  console.log(deleteDateId);

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
            // defaultValue={getActivityInfo?.title}
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
            // defaultValue={getActivityInfo?.description}
          />
          <PriceInput
            id="price"
            register={register}
            errors={errors}
            // defaultValue={getActivityInfo?.price}
          />
          <AddressInput
            id="address"
            register={register}
            errors={errors}
            getAddress={getAddress}
            setGetAddress={setGetAddress}
            // defaultValue={getActivityInfo?.address}
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
            gonnaDeleteId={gonnaDeleteId}
          />
          <ImageInputContainer
            id="image"
            register={register}
            errors={errors}
            apiImgURL={bannerApiImgURL}
            setApiImgURL={setBannerApiImgURL}
            defaultValue={getActivityInfo?.bannerImageUrl}
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
            deleteSubImageId={deleteSubImageId}
            setAddSubImageUrl={setAddSubImageUrl}

            // defaultValue={getActivityInfo?.subImages}
          />
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}
