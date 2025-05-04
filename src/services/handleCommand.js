import { MESSAGES } from '../consts/messages.js';
import { stdout } from 'node:process';
import { handleCurrentDir } from '../commands/fs/handleCurrentdir.js';
import { parseArgs } from '../utils/parseArgs.js';
import { listContent } from '../commands/fs/list.js';
import { readFileContent } from '../commands/fs/cat.js';
import { createFile } from '../commands/fs/add.js';
import { createDir } from '../commands/fs/mkdir.js';
import { renameFile } from '../commands/fs/rn.js';
import { copyFile } from '../commands/fs/cp.js';
import { moveFile } from '../commands/fs/mv.js';
import { removeFile } from '../commands/fs/rm.js';
import { validateAndExecute } from './validatePath.js';

export const handleCommand = async (input, app) => {
  const parsedArgs = parseArgs(input);
  const command = parsedArgs[0];
  const paths = parsedArgs.slice(1);

  switch (command) {
    case '.exit':
      app.close();
      break;
    case 'up':
      await handleCurrentDir('..', app);
      break;
    case 'cd':
      await handleCurrentDir(paths[0], app);
      break;
    case 'ls':
      await listContent();
      break;
    case 'cat':
      await validateAndExecute(paths, 1, readFileContent.bind(null, paths[0], app));
      break;
    case 'add':
      await validateAndExecute(paths, 1, createFile.bind(null, paths[0]));
      break;
    case 'mkdir':
      await validateAndExecute(paths, 1, createDir.bind(null, paths[0]));
      break;
    case 'rn':
      await validateAndExecute(paths, 1, renameFile.bind(null, paths[0], paths[1]));
      break;
    case 'cp':
      await validateAndExecute(paths, 1, copyFile.bind(null, paths[0], paths[1]));
      break;
    case 'mv':
      await validateAndExecute(paths, 1, moveFile.bind(null, paths[0], paths[1]));
      break;
    case 'rm':
      await validateAndExecute(paths, 1, removeFile.bind(null, paths[0], paths[1]));
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
