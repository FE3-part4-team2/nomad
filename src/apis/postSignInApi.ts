import axios from './axiosInstance';

// yulmai 아이디
// const email = 'yulmin@codeit.com';
// const password = '12345678';

//주영님 아이디
const email = 'asd@asd.com';
const password = 'asdasdasd';

const postSignUp = async () => {
  const res = await axios.post('auth/login', { email, password });

  const { accessToken, refreshToken } = res.data;

  // 로컬 스토리지에 토큰 저장
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  return res.data;
};

export default postSignUp;
