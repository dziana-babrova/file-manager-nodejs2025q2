import { chdir, cwd } from 'node:process';
import { getAbsolutePath } from '../../services/getAndValidateAbsolutePath.js';
import { MESSAGES } from '../../consts/messages.js';

export const handleCurrentDir = async (path = cwd(), app) => {
  const absolutePath = await getAbsolutePath(path, true, true);
  chdir(absolutePath);
  app.setPrompt(MESSAGES.working_directory(absolutePath));
  app.prompt();
  return cwd();
};
