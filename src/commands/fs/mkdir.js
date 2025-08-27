import { isAbsolute } from 'node:path';
import { MESSAGES } from '../../consts/messages.js';
import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { mkdir } from 'node:fs/promises';

export const createDir = async (path) => {
  if (isAbsolute(path)) {
    console.log(MESSAGES.operation_failed_path('directory name'));
    return;
  }

  const absolutePath = await getAbsolutePath(path, false);
  await mkdir(absolutePath);
};
