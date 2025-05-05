import { stdout } from 'node:process';
import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { createReadStream } from 'node:fs';
import { MESSAGES } from '../../consts/messages.js';

export const readFileContent = async (path, app) => {
  const absolutePath = await getAbsolutePath(path, true);
  const stream = createReadStream(absolutePath);
  stream.pipe(stdout);
  stream.on('end', () => {
    app.prompt();
  });
  stream.on('error', () => undefined);
};
