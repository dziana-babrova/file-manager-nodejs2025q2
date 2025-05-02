import { MESSAGES } from '../consts/messages.js';
import { stdout } from 'node:process';
import { handleCurrentDir } from './handleCurrentdir.js';

export const handleCommand = async (input, app) => {
  const inputArray = input.split(' ');
  const command = inputArray[0];

  switch (command) {
    case '.exit':
      app.close();
      break;
    case 'up':
      const destination = handleCurrentDir('..');
      app.setPrompt(MESSAGES.working_directory(destination));
      break;
    case 'cd':
      break;
    case 'ls':
      break;
    case 'cat':
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
      stdout.write(MESSAGES.invalid_input());
  }
};
