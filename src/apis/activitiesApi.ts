import axios from 'axios';

const BASE_URL = 'https://sp-globalnomad-api.vercel.app/3-2/';

export interface ClassList {
  method: string;
  cursorId: number;
  category: string;
  keyword: string;
  sort: string;
  page: number;
  size: number;
}

export interface DetailClass {
  activityId: number;
}

// 체험 리스트 조회
export const getClassListApi = async (
  method: string,
  cursorId?: number,
  category?: string,
  keyword?: string,
  sort?: string,
  page?: number,
  size?: number,
) => {
  const res = await axios.get(
    `${BASE_URL}/activities/method=${method}&cursorId?=${cursorId}&category?=${category}&keyword?=${keyword}&sort?=${sort}&page?=${page}$size?=${size}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
  if (res.status === 200) {
    return res.data;
  } else if (res.status === 400) {
    throw new Error('error');
  }
};

// 체험 상세 조회
export const getDetailClassApi = async (activityId: number) => {
  const res = await axios.get(`{${BASE_URL}/activities/${activityId}}`, {
    headers: {
      Accept: 'application/json',
    },
  });
  if (res.status === 200) {
    return res.data;
  } else if (res.status === 404) {
    throw new Error('존재하지 않는 체험입니다.');
  }
};
