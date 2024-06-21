import styles from './darkModeToggle.module.scss';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [userTheme, setUserTheme] = useState('light');

  useEffect(() => {
    // 클라이언트 측에서만 실행되도록 조건 추가. 서버에서 렌더링되면 로컬스토리지가 없기 때문에 에러 발생
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setUserTheme(storedTheme);
    } else {
      setUserTheme('light');
    }
  }, []);

  const onClick = () => {
    const newTheme = userTheme === 'light' ? 'dark' : 'light';
    setUserTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  useEffect(() => {
    userTheme === 'dark'
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.setAttribute('data-theme', 'light');
  }, [userTheme]);
  return (
    <div className={styles.toggleBox}>
      <button
        id="darkModeToggle"
        className={`${userTheme == 'light' ? styles.moon : styles.sun} ${styles.button} `}
        onClick={onClick}
      />
      <label htmlFor="darkModeToggle"></label>
    </div>
  );
}
