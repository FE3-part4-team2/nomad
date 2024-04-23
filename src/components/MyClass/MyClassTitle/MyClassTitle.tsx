import Button from '@/components/Button/Button';
import TitleInput from '../MyClassInputs/TitleInput/TitleInput';
import styles from './myClassTitle.module.scss';
import CategoryInput from '../MyClassInputs/CategoryInput/CategoryInput';
import DescriptionInput from '../MyClassInputs/DescriptionInput/DescriptionInput';
import PriceInput from '../MyClassInputs/PriceInput/PriceInput';

export default function MyClassTitle() {
  return (
    <div>
      <div className={styles.myClassTitleWrapper}>
        <span className={styles.myClassSubtitle}>내 체험 등록</span>
        <div className={styles.button}>
          <Button
            buttonTitle="등록하기"
            type="button"
            radius={4}
            fontSize={1.6}
          />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <TitleInput />
        <CategoryInput />
        <DescriptionInput />
        <PriceInput />
      </div>
    </div>
  );
}
