import CategoryBar from '@/components/mainPage/CategoryBar/CategoryBar';

interface CategoryBarProps {
  onClick: (title: string) => void;
}

export default function CategoryBarContainer({ onClick }: CategoryBarProps) {
  const category = ['문화 · 예술', '식음료', '스포츠', '투어', '관광', '웰빙'];

  const handleDropDown = () => {};

  const handleButtonClick = (title: string) => {
    onClick(title);
  };
  return (
    <CategoryBar
      category={category}
      onClick={handleButtonClick}
      handleDropDown={handleDropDown}
    />
  );
}
