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
