import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';

export const compress = async (sourcePath, destinationPath) => {
  const sourceAbsolutePath = await getAbsolutePath(sourcePath, true);
  const destinationAbsolutePath = await getAbsolutePath(destinationPath, false);

  const gzip = createBrotliCompress();
  const source = createReadStream(sourceAbsolutePath);
  const destination = createWriteStream(destinationAbsolutePath);

  await pipeline(source, gzip, destination);
};
