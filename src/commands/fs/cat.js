import { stdout } from 'node:process';
import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { createReadStream } from 'node:fs';

export const readFileContent = async (path) => {
  const absolutePath = await getAbsolutePath(path, true);
  return new Promise((resolve) => {
    const stream = createReadStream(absolutePath);
    stream.on('data', (chunk) => stdout.write(chunk.toString()));
    stream.on('end', () => {
      resolve();
  })
  });
};
