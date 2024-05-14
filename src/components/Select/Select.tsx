import styles from '@/components/Select/select.module.scss';
import { idAtom } from '@/store/atoms/idState';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

// export default function Select() {
//   return (
//     <select id={styles.class}>
//       <option value="1">체험명</option>
//       <option value="2">체험명2</option>
//     </select>
//   );
// }

export default function Select({
  options,
}: {
  options: {
    id: number; // 활동의 고유 ID
    userId: number; // 사용자 ID
    title: string; // 활동 제목
    description: string; // 활동 설명
    category: string; // 활동 카테고리
    price: number; // 가격
    address: string; // 주소
    bannerImageUrl: string; // 배너 이미지 URL
    rating: number; // 평점
    reviewCount: number; // 리뷰 수
    createdAt: string; // 생성 날짜, ISO 8601 날짜 문자열
    updatedAt: string;
  }[];
}) {
  const [ID, setID] = useRecoilState(idAtom);
  useEffect(() => {
    if (ID == 0 && options.length > 0) {
      setID(options[0].id);
    }
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setID(parseInt(event.target.value));
  };

  return (
    <div id={styles.selectContainer}>
      <label htmlFor="class">체험명</label>
      <select id={styles.class} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
