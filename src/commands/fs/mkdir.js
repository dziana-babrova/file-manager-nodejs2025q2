import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { mkdir } from 'node:fs/promises';

export const createDir = async (path) => {
  const absolutePath = await getAbsolutePath(path, false);
  await mkdir(absolutePath);
};
