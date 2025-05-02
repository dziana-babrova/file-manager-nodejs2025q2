import path, { isAbsolute, normalize } from 'path';
import { handleCurrentDir } from '../services/handleCurrentdir.js';

export const getAbsolutePath = (pathArg) => {
  const currentDir = handleCurrentDir();
  const absolutePath = isAbsolute(pathArg)
    ? path.resolve(pathArg)
    : path.resolve(currentDir, pathArg);
  return normalize(absolutePath);
};
