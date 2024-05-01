import styles from './showArrow.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ShowArrow() {
  const [showArrow, setShowArrow] = useState(false);

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 1000) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showArrow ? (
        <button onClick={MoveToTop} className={styles.moveIcon}>
          <Image
            src="/assets/icons/arrow.png"
            alt="상단 이동 화살표"
            width={15}
            height={15}
          />
        </button>
      ) : (
        ''
      )}
    </>
  );
}
