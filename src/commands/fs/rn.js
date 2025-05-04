import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { rename } from 'node:fs/promises';

export const renameFile = async (sourcePath, destinationPath) => {
  const sourceAbsolutePath = await getAbsolutePath(sourcePath, true);
  const destinationAbsolutePath = await getAbsolutePath(destinationPath, false);
  await rename(sourceAbsolutePath, destinationAbsolutePath);
};
