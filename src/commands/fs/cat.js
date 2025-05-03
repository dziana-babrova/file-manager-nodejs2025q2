import { stdout } from 'node:process';
import { getAbsolutePath } from '../../utils/getAbsolutePath.js';
import { createReadStream } from 'node:fs';
import { doesExist } from '../../services/checkPresence.js';
import { MESSAGES } from '../../consts/messages.js';

export const readFileContent = async (path, app) => {
  const absolutePath = getAbsolutePath(path);
  if (await doesExist(absolutePath)) {
    const stream = createReadStream(absolutePath);
    stream.pipe(stdout);
    stream.on('end', () => {
      app.prompt();
    });
  } else {
    stdout.write(MESSAGES.operation_failed());
  }
};
