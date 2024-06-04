import Button from '@/components/Button/Button';
import styles from './myClassTitle.module.scss';
import CategoryInput from '../MyClassInputs/CategoryInput/CategoryInput';
import DescriptionInput from '../MyClassInputs/DescriptionInput/DescriptionInput';
import PriceInput from '../MyClassInputs/PriceInput/PriceInput';
import AddressInput from '../MyClassInputs/AddressInput/AddressInput';
// import ImageInputContainer from '@/containers/ImageInput/ImageInputContainer';
import { useFieldArray, useForm } from 'react-hook-form';
import TitleInput from '../MyClassInputs/TitleInput/TitleInput';
import { useEffect, useState } from 'react';
import {
  getDetailClassApi,
  postActivitiesImageApi,
} from '@/apis/activitiesApi';
import { DetailClassType } from '@/types/activitiesType/ActivitiesType';
import { patchEditMyActivityApi } from '@/apis/myActivitiesApi';
import EditSubImageInputContainer from '@/containers/ImageInput/EditSubImageInputContainer';
import EditDateInput from '../MyClassInputs/DateInput/EditDateInput';
import { useRouter } from 'next/router';
import ModalBase from '@/components/Modal/ModalBase';
import MyClassModal from '../MyClassModal';
import EditBannerImageInputContainer from '@/containers/ImageInput/EditBannerImageInputContainer';

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
  getMyActivityData: DetailClassType;
}

export default function EditMyClass({
  buttonTitle,
  getMyActivityData,
}: MyClassTitleProps) {
  const router = useRouter();
  const [getAddress, setGetAddress] = useState(getMyActivityData.address);

  console.log(getMyActivityData);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      title: getMyActivityData.title,
      category: getMyActivityData.category,
      description: getMyActivityData.description,
      price: getMyActivityData.price,
      address: getMyActivityData.address,
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'schedules',
    control: control,
  });

  //이미지 미리보기
  const [bannerImgURL, setBannerImgURL] = useState(
    getMyActivityData.bannerImageUrl,
  );
  const [formData, setFormData] = useState<FormData>();
  // const [apiImgURL, setApiBannerImgURL] = useState('');
  // const [bannerApiImgURL, setBannerApiImgURL] = useState('');
  const [isModalOpen, setIsModalOepn] = useState(false);

  const checkBannerURL = async (): Promise<void> => {
    if (formData) {
      const data = await postActivitiesImageApi(formData);
      return data.activityImageUrl;
    }
  };

  const onSubmit = async (data: FormValues) => {
    const banner = await checkBannerURL();
    // const bannerImg = String(checkBannerURL());
    // data.subImage = apiImgURL;
    // data.image = bannerApiImgURL;

    const id = getMyActivityData.id;
    const editMyActivity = {
      title: data.title,
      category: data.category,
      description: data.description,
      address: data.address,
      price: Number(data.price),
      bannerImageUrl: banner,
      subImageIdsToRemove: deleteSubImge,
      subImageUrlsToAdd: addSubImgUrl,
      scheduleIdsToRemove: deleteDateId,
      schedulesToAdd: data.schedules,
    };

    const apiData = await patchEditMyActivityApi(id, editMyActivity);
    if (apiData) {
      if (apiData.status === 200) {
        setIsModalOepn(true);
      }
    }
  };

  function closeModal() {
    setIsModalOepn(false);
    router.push('/my-page/my-class');
  }

  return (
    <>
      <div>
        <form
          className={styles.myClassAddBox}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.myClassTitleWrapper}>
            <span className={styles.myClassSubtitle}>내 체험 수정</span>
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
              setValue={setValue}
            />
            {/* <EditDateInput
              id="date"
              register={register}
              errors={errors}
              fields={fields}
              append={append}
              remove={remove}
              plusDefaultValue={getPlusDateInfo}
              setGetPlusDateInfo={setGetPlusDateInfo}
              setGonnaDeleteId={setGonnaDeleteId}
            /> */}
            <EditBannerImageInputContainer
              id="image"
              register={register}
              errors={errors}
              bannerImgURL={bannerImgURL}
              setBannerImgURL={setBannerImgURL}
              setFormData={setFormData}
              setValue={setValue}
            />
            {/* <EditSubImageInputContainer
              id="subImage"
              register={register}
              errors={errors}
              apiImgURL={apiImgURL}
              setApiImgURL={setApiImgURL}
              setIdWithApiImgURL={setIdWithApiImgURL}
              idWithApiImgURL={idWithApiImgURL}
              setDeleteSubImageId={setDeleteSubImageId}
            /> */}
          </div>
          <div className={styles.button}>
            <Button buttonTitle={buttonTitle} radius={4} fontSize={1.6} />
          </div>
        </form>
      </div>
      {isModalOpen ? (
        <ModalBase
          children={
            <MyClassModal
              message="체험 수정이 완료되었습니다."
              onClick={closeModal}
            />
          }
          type="alert"
        ></ModalBase>
      ) : (
        ''
      )}
    </>
  );
}
