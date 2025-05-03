import { stdout } from 'node:process';
import { doesExist } from '../../services/checkPresence.js';
import { getAbsolutePath } from '../../utils/getAbsolutePath.js';
import { mkdir } from 'node:fs/promises';
import { MESSAGES } from '../../consts/messages.js';

export const createDir = async () => {
  const absolutePath = getAbsolutePath(path);
  if (!(await doesExist(absolutePath))) {
    await mkdir(absolutePath);
  } else {
    stdout.write(MESSAGES.operation_failed());
  }
};
