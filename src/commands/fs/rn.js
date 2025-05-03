import { stdout } from 'node:process';
import { doesExist } from '../../services/checkPresence.js';
import { getAbsolutePath } from '../../utils/getAbsolutePath.js';
import { rename } from 'node:fs/promises';
import { MESSAGES } from '../../consts/messages.js';

export const renameFile = async (sourcePath, destinationPath) => {
  const sourceAbsolutePath = getAbsolutePath(sourcePath);
  const destinationAbsolutePath = getAbsolutePath(destinationPath);
  if ((await doesExist(sourceAbsolutePath)) && (await doesExist(destinationAbsolutePath))) {
    await rename(sourceAbsolutePath, destinationAbsolutePath);
  } else {
    stdout.write(MESSAGES.operation_failed());
  }
};
