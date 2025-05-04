import { arch } from 'node:os';

export const getArchitecture = () => {
  console.log(arch());
};
