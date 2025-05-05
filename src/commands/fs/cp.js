import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { basename } from 'node:path';

export const copyFile = async (sourcePath, destinationPath) => {
  const sourceAbsolutePath = await getAbsolutePath(sourcePath, true);
  const fileName = basename(sourceAbsolutePath);
  await getAbsolutePath(destinationPath, true);
  const destinationAbsolutePath = await getAbsolutePath(`${destinationPath}/${fileName}`, false);
  const readStream = createReadStream(sourceAbsolutePath);
  const writeStream = createWriteStream(destinationAbsolutePath);
  await pipeline(readStream, writeStream);
};
