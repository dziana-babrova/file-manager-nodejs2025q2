import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { rm } from 'node:fs/promises';
import { basename } from 'node:path';

export const moveFile = async (sourcePath, destinationPath) => {
  const sourceAbsolutePath = await getAbsolutePath(sourcePath, true);
  const fileName = basename(sourceAbsolutePath);
  const destinationAbsolutePathToFolder = await getAbsolutePath(`${destinationPath}/${fileName}.br`, false);
  const destinationAbsolutePath = await getAbsolutePath(`${destinationAbsolutePathToFolder}/${fileName}`, false);
  const readStream = createReadStream(sourceAbsolutePath);
  const writeStream = createWriteStream(destinationAbsolutePath);
  await pipeline(readStream, writeStream);
  await rm(sourceAbsolutePath);
};
