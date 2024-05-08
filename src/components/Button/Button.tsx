import { HTMLAttributes } from 'react';
import styles from './button.module.scss';

/**
 *
 * * div의 사이즈로 버튼의 크기를 조정해주세요. 버튼은 h/w 100%로 설정되어있습니다
 *
 * @param status black/white/disable
 * @param buttonTitle 버튼 안에 들어갈 문구(string)
 * @param radius border-radius적용값 (number) default: 6
 * @param fontSize font-size적용값 (number) default: mobile-14/16
 *
 */

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  status?: string;
  buttonTitle?: string;
  radius?: number;
  fontSize?: number;
  backgroundColor?: string;
}

export default function Button({
  status = 'black',
  buttonTitle = 'button',
  radius = 6,
  fontSize,
  backgroundColor,
  ...rest
}: ButtonProps) {
  const buttonClass = (status: string) => {
    switch (status) {
      case 'disable':
        return `${styles.button} ${styles.disable}`;
      case 'white':
        return `${styles.button} ${styles.white}`;
      default:
        return `${styles.button} ${styles.black}`;
    }
  };
  const buttonClassName = buttonClass(status);

  return (
    <button
      className={buttonClassName}
      style={{
        borderRadius: `${radius}px`,
        fontSize: `${fontSize}rem`,
        backgroundColor: `${backgroundColor}`,
      }}
      {...rest}
    >
      {buttonTitle}
    </button>
  );
}
