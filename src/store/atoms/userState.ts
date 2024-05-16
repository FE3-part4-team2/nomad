import { loginType } from '@/types/authType/AuthType';
import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: null as null | loginType,
});
