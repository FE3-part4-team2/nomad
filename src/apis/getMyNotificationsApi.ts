import axios from './axiosInstance';

const getMyNotifications = async () => {
  const res = await axios.get('my-notifications');
  return res.data;
};

export default getMyNotifications;
