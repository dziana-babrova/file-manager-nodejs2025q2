import { isAbsolute } from 'node:path';
import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { writeFile } from 'node:fs/promises';
import { MESSAGES } from '../../consts/messages.js';

export const createFile = async (path) => {
  if (isAbsolute(path)) {
    console.log(MESSAGES.operation_failed_path('filename'));
    return;
  }
  const absolutePath = await getAbsolutePath(path, false);
  await writeFile(absolutePath, '');
};
