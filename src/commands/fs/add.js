import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { writeFile } from 'node:fs/promises';

export const createFile = async (path) => {
  const absolutePath = await getAbsolutePath(path, false);
  await writeFile(absolutePath, '');
};
