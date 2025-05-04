import { userInfo } from 'node:os';

export const getUsername = () => {
  console.log(userInfo().username);
};
