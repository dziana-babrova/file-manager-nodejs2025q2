import { chdir, cwd } from 'node:process';

export const handleCurrentDir = (path = cwd()) => {
  chdir(path);
  return cwd();
};
