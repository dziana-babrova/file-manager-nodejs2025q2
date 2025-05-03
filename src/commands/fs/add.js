import { stdout } from 'node:process';
import { doesExist } from '../../services/checkPresence.js';
import { getAbsolutePath } from '../../utils/getAbsolutePath.js';
import { writeFile } from 'node:fs/promises';
import { MESSAGES } from '../../consts/messages.js';

export const createFile = async (path) => {
  const absolutePath = getAbsolutePath(path);
  if (!(await doesExist(absolutePath))) {
    await writeFile(absolutePath, '');
  } else {
    stdout.write(MESSAGES.operation_failed());
  }
};
