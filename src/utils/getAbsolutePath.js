import path, { isAbsolute, normalize } from 'path';
import { cwd } from 'process';

export const getAbsolutePath = (pathArg, inCurrentDir = true) => {
  const absolutePath =
    !inCurrentDir && isAbsolute(pathArg) ? pathArg : path.resolve(cwd(), pathArg);
  return normalize(absolutePath);
};
