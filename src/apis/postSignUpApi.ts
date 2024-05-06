import axios from './axiosInstance';

const email = 'yulmin@codeit.com';
const nickname = 'yulmai';
const password = '12345678';

const postSignUp = async () => {
  const res = await axios.post('users', { email, nickname, password });
  return res.data;
};

export default postSignUp;
