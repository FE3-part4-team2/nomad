export interface DetailClassType {
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
  subImages: [
    {
      id: number;
      imageUrl: string;
    },
  ];
  schedules: [
    {
      id: number;
      date: string;
      startTime: string;
      endTime: string;
    },
  ];
}

export interface DetailReviewType {
  averageRating: number;
  totalCount: number;
  reviews: [
    {
      id: number;
      user: {
        profileImageUrl: string;
        nickname: string;
        id: number;
      };
      activityId: number;
      rating: number;
      content: string;
      createdAt: string;
      updatedAt: string;
    },
  ];
}

export interface ActivitiesImageType {
  activityImageUrl: string;
}

export interface AddMyActivityApiType {
  title: string;
  category: string;
  description: string;
  address: string;
  price: number;
  schedules: { date: string; startTime: string; endTime: string }[];
  bannerImageUrl: string;
  subImageUrls: string[];
}
