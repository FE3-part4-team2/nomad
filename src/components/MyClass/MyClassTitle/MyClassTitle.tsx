import Button from '@/components/Button/Button';
import TitleInput from '../MyClassInputs/TitleInput/TitleInput';
import styles from './myClassTitle.module.scss';
import CategoryInput from '../MyClassInputs/CategoryInput/CategoryInput';
import DescriptionInput from '../MyClassInputs/DescriptionInput/DescriptionInput';
import PriceInput from '../MyClassInputs/PriceInput/PriceInput';
import DateInput from '../MyClassInputs/DateInput/DateInput';
import AddressInput from '../MyClassInputs/AddressInput/AddressInput';
import ImageInput from '../MyClassInputs/ImageInput/ImageInput';
import SubImageInput from '../MyClassInputs/ImageInput/SubImgaeInput';

export default function MyClassTitle() {
  return (
    <div className={styles.myClassAddBox}>
      <div className={styles.myClassTitleWrapper}>
        <span className={styles.myClassSubtitle}>내 체험 등록</span>
        <div className={styles.button}>
          <Button buttonTitle="등록하기" radius={4} fontSize={1.6} />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <TitleInput />
        <CategoryInput />
        <DescriptionInput />
        <PriceInput />
        <AddressInput />
        <DateInput />
        <ImageInput />
        <SubImageInput />
      </div>
    </div>
  );
}
