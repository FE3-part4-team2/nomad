import Button from '@/components/Button/Button';
import styles from './searchBar.module.scss';
import Image from 'next/image';
import { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export default function SearchBar({
  value,
  onChange,
  onClick,
  onKeyDown,
}: SearchBarProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>무엇을 체험하고 싶으신가요?</div>
      <div className={styles.search}>
        <div className={styles.inputBar}>
          <Image
            src="/assets/icons/lignt-icon.png"
            alt="검색"
            height={24}
            width={24}
          />
          <div>
            <input
              type="search"
              placeholder="내가 원하는 체험은"
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
            />
          </div>
        </div>
        <div className={styles.button}>
          <Button
            status="black"
            buttonTitle="검색하기"
            radius={4}
            fontSize={1.6}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}
