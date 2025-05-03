import { stdout } from 'node:process';
import { doesExist } from '../../services/checkPresence.js';
import { getAbsolutePath } from '../../utils/getAbsolutePath.js';
import { MESSAGES } from '../../consts/messages.js';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { rm } from 'node:fs/promises';

export const copyFile = async (sourcePath, destinationPath) => {
  const sourceAbsolutePath = getAbsolutePath(sourcePath);
  const destinationAbsolutePath = getAbsolutePath(destinationPath);
  if ((await doesExist(sourceAbsolutePath)) && !(await doesExist(destinationAbsolutePath))) {
    const readStream = createReadStream(sourceAbsolutePath);
    const writeStream = createWriteStream(destinationAbsolutePath);
    await pipeline(readStream, writeStream);
    await rm(sourcePath);
  } else {
    stdout.write(MESSAGES.operation_failed());
  }
};
