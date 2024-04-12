import Button from '@/components/Button/Button';

export default function Form() {
  const handleButton = () => {
    console.log('엄청난 로직');
  };

  return (
    <>
      <Button onClick={handleButton} title="확인버튼" />
      <Button onClick={handleButton} title="취소버튼" />
    </>
  );
}
