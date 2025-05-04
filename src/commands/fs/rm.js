import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { rm } from 'node:fs/promises';

export const removeFile = async (path) => {
  const absolutePath = await getAbsolutePath(path, true);
  await rm(absolutePath);
};
