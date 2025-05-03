import { MESSAGES } from '../consts/messages.js';
import { stdout } from 'node:process';
import { handleCurrentDir } from '../commands/fs/handleCurrentdir.js';
import { parseArgs } from '../utils/parseArgs.js';
import { listContent } from '../commands/fs/list.js';
import { readFileContent } from '../commands/fs/cat.js';

export const handleCommand = async (input, app) => {
  const parsedArgs = parseArgs(input);
  const command = parsedArgs[0];
  const paths = parsedArgs.slice(1);

  switch (command) {
    case '.exit':
      app.close();
      break;
    case 'up':
      const upperDirectory = await handleCurrentDir('..');
      app.setPrompt(MESSAGES.working_directory(upperDirectory));
      break;
    case 'cd':
      if (!paths[0]) {
        stdout.write(MESSAGES.invalid_input_arguments());
      }
      const targetDirectory = await handleCurrentDir(paths[0]);
      app.setPrompt(MESSAGES.working_directory(targetDirectory));
      break;
    case 'ls':
      await listContent();
      break;
    case 'cat':
      if (!paths[0]) {
        stdout.write(MESSAGES.invalid_input_arguments());
      }
      readFileContent(paths[0], app);

      break;
    case 'add':
      break;
    case 'mkdir':
      break;
    case 'rn':
      break;
    case 'cp':
      break;
    case 'mv':
      break;
    case 'rm':
      break;
    case 'os':
      break;
    case 'hash':
      break;
    case 'compress':
      break;
    case 'decompress':
      break;
    default:
      stdout.write(MESSAGES.invalid_input_command());
  }
};
