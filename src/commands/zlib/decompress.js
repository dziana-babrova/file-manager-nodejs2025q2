import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { basename } from 'node:path';

export const decompress = async (sourcePath, destinationPath) => {
  const sourceAbsolutePath = await getAbsolutePath(sourcePath, true);
  const destinationAbsolutePathToFolder = await getAbsolutePath(destinationPath, true);
  const fileName = basename(sourceAbsolutePath, '.br');
  const destinationAbsolutePath = await getAbsolutePath(`${destinationAbsolutePathToFolder}/${fileName}`, false);
  const gzip = createBrotliDecompress();
  const source = createReadStream(sourceAbsolutePath);
  const destination = createWriteStream(destinationAbsolutePath);

  await pipeline(source, gzip, destination);
};
