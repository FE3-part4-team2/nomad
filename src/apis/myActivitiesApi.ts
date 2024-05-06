import axios from './axiosInstance';

const getMyActivities = async () => {
  const res = await axios.get('my-activities');
  return res.data;
};

export default getMyActivities;
