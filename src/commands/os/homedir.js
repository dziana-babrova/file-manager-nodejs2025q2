import { homedir } from 'node:os';

export const getHomedir = () => {
  console.log(homedir());
};
