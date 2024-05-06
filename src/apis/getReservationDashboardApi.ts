import axios from './axiosInstance';

const getREservationDashboard = async () => {
  const res = await axios.get('my-activities/{x}/reservation-dashboard');
  return res.data;
};

export default getREservationDashboard;
