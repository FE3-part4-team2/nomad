import { PatchEditMyActivityApiType } from '@/types/activitiesType/MyActivityType';
import axiosInstance from './axiosInstance';

const getMyActivities = async () => {
  const res = await axiosInstance.get('my-activities');
  return res.data;
};

export default getMyActivities;

//내 체험 수정
export const patchEditMyActivityApi = async (
  id: number,
  editMyActivity: PatchEditMyActivityApiType,
) => {
  const res = await axiosInstance.post(`my-activities/${id}`, editMyActivity, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.data;
};
