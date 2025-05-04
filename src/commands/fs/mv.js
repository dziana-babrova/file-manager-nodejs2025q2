import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { rm } from 'node:fs/promises';

export const moveFile = async (sourcePath, destinationPath) => {
  const sourceAbsolutePath = await getAbsolutePath(sourcePath, true);
  const destinationAbsolutePath = await getAbsolutePath(destinationPath, false);
  const readStream = createReadStream(sourceAbsolutePath);
  const writeStream = createWriteStream(destinationAbsolutePath);
  await pipeline(readStream, writeStream);
  await rm(sourceAbsolutePath);
};
