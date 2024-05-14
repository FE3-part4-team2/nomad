import { atom } from 'recoil';

export const idAtom = atom({
  key: 'idAtom',
  default: 0 as number,
});

export const totalCountAtom = atom({
  key: 'totalCountAtom',
  default: 0 as number,
});
