import { stdout } from 'node:process';
import { doesExist } from '../../services/checkPresence.js';
import { getAbsolutePath } from '../../utils/getAbsolutePath.js';
import { MESSAGES } from '../../consts/messages.js';
import { rm } from 'node:fs/promises';

export const removeFile = async (path) => {
  const absolutePath = getAbsolutePath(path);
  if (await doesExist(absolutePath)) {
    await rm(absolutePath);
  } else {
    stdout.write(MESSAGES.operation_failed());
  }
};
