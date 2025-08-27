import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { MESSAGES } from '../../consts/messages.js';

export const calculateHash = async (path) => {
  const absolutePath = await getAbsolutePath(path, true);

  const hash = createHash('sha256');
  const stream = createReadStream(absolutePath);
  stream.on('readable', () => {
    const data = stream.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest('hex')}`);
    }
  });

  stream.on('error', () => {
    console.log(MESSAGES.operation_failed());
  });
};
