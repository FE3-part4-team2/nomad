import Button from '@/components/Button/Button';
import styles from './myClassTitle.module.scss';
import CategoryInput from '../MyClassInputs/CategoryInput/CategoryInput';
import DescriptionInput from '../MyClassInputs/DescriptionInput/DescriptionInput';
import PriceInput from '../MyClassInputs/PriceInput/PriceInput';
import DateInput from '../MyClassInputs/DateInput/DateInput';
import AddressInput from '../MyClassInputs/AddressInput/AddressInput';
import FImageInput from '@/containers/ImageInput/FImageInput';
import FSubImageInput from '@/containers/ImageInput/FSubImageInput';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import TitleInput from '../MyClassInputs/TitleInput/TitleInput';

export type FormValues = {
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
  subImage?: string[];
};

export default function MyClassTitle() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit = (data: FormValues) => {
    // price number로 바꿔줘야함
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
          <FImageInput id="image" register={register} errors={errors} />
          <FSubImageInput />
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}
