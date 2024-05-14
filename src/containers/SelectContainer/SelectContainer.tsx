import Select from '@/components/Select/Select';

interface ActivityData {
  activities: {
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
  cursorId: number | null;
  totalCount: number;
}

export default function SelectCon({ data }: { data: ActivityData }) {
  // const [options, setOptions] = useState([]);

  const dataArray = Object.values(data);

  const options = dataArray[0];

  return <Select options={options} />;
}

// .map((item: any) => item.title);
