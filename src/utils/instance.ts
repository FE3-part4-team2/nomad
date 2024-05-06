import axios from 'axios';

export const BASE_URL = 'https://sp-globalnomad-api.vercel.app/3-2/';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
