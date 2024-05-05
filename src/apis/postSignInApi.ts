import axios from './axiosInstance';

const email = 'yulmin@codeit.com';
const password = '12345678';

const postSignUp = async () => {
  const res = await axios.post('auth/login', { email, password });
  return res.data;
};

export default postSignUp;
