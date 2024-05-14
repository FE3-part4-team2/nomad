import { GetClassDataParamsType } from '@/types/type';
import { atom } from 'recoil';

export const paramState = atom<GetClassDataParamsType>({
  key: 'paramState',
  default: {
    method: 'offset',
    page: 1,
    size: 8,
  },
});
