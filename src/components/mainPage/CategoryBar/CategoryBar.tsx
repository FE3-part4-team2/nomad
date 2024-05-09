import Button from '@/components/Button/Button';
import styles from './categoryBar.module.scss';
import DropDown from '@/components/DropDown/DropDown';

interface CategoryBarProps {
  category: string[];
  onClick: (title: string) => void;
  handleDropDown: () => void;
}

export default function CategoryBar({
  category,
  onClick,
  handleDropDown,
}: CategoryBarProps) {
  return (
    <div className={styles.categoryBar}>
      <div className={styles.buttons}>
        {category.map((cat) => (
          <div className={styles.button}>
            <Button
              key={cat}
              buttonTitle={cat}
              radius={15}
              status="white"
              onClick={() => onClick(cat)}
            />
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
