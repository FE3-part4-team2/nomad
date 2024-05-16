import { PatchEditMyActivityApiType } from '@/types/activitiesType/MyActivityType';
import { getMyActivitiesClassProps } from '@/types/activitiesType/MyActivityType';
import { toast } from 'react-toastify';
import axiosInstance from './axiosInstance';
import { AxiosError } from 'axios';

const getMyActivities = async () => {
  const res = await axiosInstance.get('my-activities');
  return res.data;
};

export default getMyActivities;

export const getMyActivitiesClass = async ({
  size,
  cursorId,
}: getMyActivitiesClassProps = {}) => {
  let params: getMyActivitiesClassProps = {};
  if (cursorId !== undefined) {
    params.cursorId = cursorId;
  }
  if (size !== undefined) {
    params.size = size;
  }
  try {
    const res = await axiosInstance.get(`my-activities`, { params });
    return res.data;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};

//내 체험 수정
export const patchEditMyActivityApi = async (
  id: number,
  editMyActivity: PatchEditMyActivityApiType,
) => {
  try {
    const res = await axiosInstance.patch(
      `my-activities/${id}`,
      editMyActivity,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return res;
  } catch (e: any) {
    if (e.response.status >= 400) {
      toast.error(e.response.data.message);
    }
  }
};

// 내 체험 삭제

export const deleteActivitiesApi = async (id: number) => {
  try {
    await axiosInstance.delete(`my-activities/${id}`);
    toast.success('체험이 삭제되었습니다.');
  } catch (e: any) {
    if (
      e.response.status === 400 ||
      e.response.status === 403 ||
      e.response.status === 404
    ) {
      toast.error(e.response.data.message);
    }
  }
};

// 내 체험 수정

export const editActivitiesApi = async (id: number) => {
  try {
    const res = await axiosInstance.patch(`my-activities/${id}`);
    return res.data;
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};
