import { GetClassDataParamsType } from '@/types/type';
import axios from './axiosInstance';
import axiosInstance from './axiosInstance';
import { toast } from 'react-toastify';

// 체험 리스트 조회
export const getClassListApi = async (params: GetClassDataParamsType) => {
  const res = await axios.get('activities', {
    headers: {
      Accept: 'application/json',
    },
    params,
  });
  if (res.status === 200) {
    return res.data;
  } else if (res.status === 400) {
    throw new Error('error');
  }
};

// 체험 상세 조회
export const getDetailClassApi = async (id: number) => {
  const detail = await axiosInstance.get(`activities/${id}`);

  return detail.data;
};

// 체험 예약 가능일 조회
export const getAvailableScheduleApi = async (
  id: number = 776,
  year: string = '2024',
  month: string = '05',
) => {
  const res = await axiosInstance.get(
    `activities/${id}/available-schedule?year=${year}&month=${month}`,
  );
  return res.data;
};

// 체험 리뷰 조회
export const getDetailClassReviewApi = async (
  id: number = 776,
  page: number,
  size: number,
) => {
  const review = await axiosInstance.get(
    `activities/${id}/reviews?page=${page}&size=${size}`,
  );
  return review.data;
};

// 체험 예약 신청
export const postReservationApi = async (
  id: number,
  scheduleId: number,
  headCount: number,
) => {
  try {
    const res = await axiosInstance.post(`activities/${id}/reservations`, {
      scheduleId,
      headCount,
    });
    toast.success('예약 성공!');
    return res.data;
  } catch (e: any) {
    if (e.response.status === 409) {
      toast.error(e.response.data.message);
    }
  }
};
