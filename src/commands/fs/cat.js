import { stdout } from 'node:process';
import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { createReadStream } from 'node:fs';

export const readFileContent = async (path, app) => {
  const absolutePath = await getAbsolutePath(path, true);
  const stream = createReadStream(absolutePath);
  stream.pipe(stdout);
  stream.on('end', () => {
    app.prompt();
  });
};
