import CategoryBar from '@/components/mainPage/CategoryBar/CategoryBar';

interface CategoryBarProps {
  onClick: (title: string) => void;
  onClickDropDown: (value: string) => void;
}

export default function CategoryBarContainer({
  onClick,
  onClickDropDown,
}: CategoryBarProps) {
  const category = [
    '모든 체험',
    '문화 · 예술',
    '식음료',
    '스포츠',
    '투어',
    '관광',
    '웰빙',
  ];

  const handleDropDown = (e: string) => {
    let selectedValue = e;
    if (selectedValue === '가격이 낮은 순') {
      selectedValue = 'price_desc';
      onClickDropDown(selectedValue);
    } else {
      selectedValue = 'price_asc';
      onClickDropDown(selectedValue);
    }
  };

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
