import path, { isAbsolute, normalize } from 'path';
import { cwd, stdout } from 'process';
import { doesExist } from '../utils/checkPresence.js';
import { MESSAGES } from '../consts/messages.js';

export const getAbsolutePath = async (pathArg, shouldExist, inCurrentDir = true) => {
  const absolutePath =
    !inCurrentDir && isAbsolute(pathArg) ? pathArg : path.resolve(cwd(), pathArg);
  if ((await doesExist(absolutePath)) === shouldExist) return normalize(absolutePath);

  stdout.write(MESSAGES.operation_failed);
};
