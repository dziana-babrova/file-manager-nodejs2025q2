import path, { isAbsolute, normalize } from 'path';
import { cwd } from 'process';
import { doesExist } from '../utils/checkPresence.js';

export const getAbsolutePath = async (pathArg, shouldExist, isCurrDir = false) => {
  const absolutePath = isAbsolute(pathArg) ? pathArg : path.resolve(cwd(), pathArg);
  if (isCurrDir) return path.resolve(cwd(), pathArg);
  if ((await doesExist(absolutePath)) === shouldExist) return normalize(absolutePath);
  else throw new Error();
};
