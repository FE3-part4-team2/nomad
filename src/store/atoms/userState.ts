import { loginType } from '@/types/authType/AuthType';
import { atom } from 'recoil';

interface UserImage {
  profileImageUrl: string;
}

export const userState = atom({
  key: 'userState',
  default: null as null | loginType,
});

export const userNewImage = atom<UserImage | null>({
  key: 'userNewImage',
  default: null,
});

export const userProfileImage = atom({
  key: 'userProfileImage',
  default: null as null | string,
});
