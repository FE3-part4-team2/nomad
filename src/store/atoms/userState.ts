import { loginType } from '@/types/authType/AuthType';
import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: null as null | loginType,
});

export const userNewImage = atom({
  key: 'userNewImage',
  default: null as null | string,
});
