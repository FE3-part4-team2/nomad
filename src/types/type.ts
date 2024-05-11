export interface ClassDataType {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface TotalClassDataType {
  cursorId: number;
  totalCount: number;
  activities: ClassDataType[];
}

export interface GetClassDataParamsType {
  method: 'offset' | 'cursor';
  cursorId?: number;
  category?: string;
  keyword?: string;
  sort?: 'most_reviewed' | 'price_asc' | 'price_desc' | 'latest';
  page?: number;
  size?: number;
}

export interface ReservationCardType {
  classImage: string; // 배너이미지
  revStatus: string; //현재 예약 상태
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  headCount: number; //총 모집인원
  price: number;
  //   reviewSubmitted: boolean; //리뷰 썼는지 안썼는지 , 이거는 페이지에서
  buttonStatus: string;
  buttonTitle: string;
}

export interface getMyReservationType {
  cursorId?: number;
  size?: number;
  status?: string;
}
