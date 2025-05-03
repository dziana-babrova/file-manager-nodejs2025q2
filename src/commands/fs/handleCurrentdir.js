import { chdir, cwd, stdout } from 'node:process';
import { getAbsolutePath } from '../../utils/getAbsolutePath.js';
import { access } from 'node:fs/promises';
import { MESSAGES } from '../../consts/messages.js';

export const handleCurrentDir = async (path = cwd()) => {
  const absolutePath = getAbsolutePath(path);
  try {
    await access(absolutePath);
    chdir(absolutePath);
  } catch {
    stdout.write(MESSAGES.operation_failed);
  }
  return cwd();
};
