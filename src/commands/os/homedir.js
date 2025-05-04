import { cwd } from 'node:process';

export const getHomedir = () => {
  console.log(cwd());
};
