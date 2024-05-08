import Button from '@/components/Button/Button';
import styles from './categoryBar.module.scss';
import DropDown from '@/components/DropDown/DropDown';

export default function CategoryBar() {
  const category = ['문화·예술', '식음료', '스포츠', '투어', '관광', '웰빙'];

  const handleDropDown = () => {};

  return (
    <div className={styles.categoryBar}>
      <div className={styles.buttons}>
        {category.map((cat, index) => (
          <div className={styles.button}>
            <Button key={index} buttonTitle={cat} radius={15} status="white" />
          </div>
        ))}
      </div>
      <div className={styles.dropDown}>
        <DropDown
          dropDownName="가격"
          dropDownList={['가격이 낮은 순', '가격이 높은 순']}
          onClick={handleDropDown}
        />
      </div>
    </div>
  );
}
