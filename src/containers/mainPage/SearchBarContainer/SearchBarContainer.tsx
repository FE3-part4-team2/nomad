import SearchBar from '@/components/mainPage/SearchBar/SearchBar';
import { searchState } from '@/store/atoms/searchState';
import { useRouter } from 'next/router';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function SearchBarContainer() {
  const [search, setSearch] = useRecoilState(searchState);
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClick = () => {
    if (inputValue === '') {
      //input안이 빈값일때
    } else {
      setSearch(inputValue);
      router.push(`/search?q=${inputValue}`);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (inputValue === '') {
        //input안이 빈값일때
      } else {
        setSearch(inputValue);
        router.push(`/search?q=${inputValue}`);
      }
    }
  };

  return (
    <>
      <SearchBar
        value={inputValue}
        onChange={onChange}
        onClick={onClick}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}
