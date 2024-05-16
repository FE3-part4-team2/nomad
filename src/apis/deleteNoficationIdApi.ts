import axios from './axiosInstance';

const deleteNoficationIdApi = async ({
  notificationId,
}: {
  notificationId: number;
}) => {
  console.log(notificationId);
  const res = await axios.delete(`my-notifications/${notificationId}`);
  return res.data;
};

export default deleteNoficationIdApi;
