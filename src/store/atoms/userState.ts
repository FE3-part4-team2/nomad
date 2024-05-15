import { atom, selector } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: null as null | { id: number },
});

export const getUserId = selector({
  key: 'getUserId',
  get: ({ get }) => {
    const user = get(userState);
    return user ? user.id : null;
  },
});
