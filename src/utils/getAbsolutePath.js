import path, { isAbsolute, normalize } from 'path';
import { cwd } from 'process';

export const getAbsolutePath = (pathArg) => {
  const absolutePath = isAbsolute(pathArg) ? pathArg : path.resolve(cwd(), pathArg);
  return normalize(absolutePath);
};
