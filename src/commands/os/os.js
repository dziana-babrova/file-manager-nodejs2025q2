import { stdout } from 'node:process';
import { MESSAGES } from '../../consts/messages.js';
import { OS_COMMANDS } from '../../consts/osCommands.js';
import { getEOL } from './eol.js';
import { getCpus } from './cpus.js';
import { getHomedir } from './homedir.js';
import { getUsername } from './username.js';
import { getArchitecture } from './architecture.js';

export const handleOsCommand = async (command) => {
  if (command) {
    switch (command) {
      case OS_COMMANDS.EOL:
        getEOL();
        break;
      case OS_COMMANDS.cpus:
        getCpus();
        break;
      case OS_COMMANDS.homedir:
        getHomedir();
        break;
      case OS_COMMANDS.username:
        getUsername();
        break;
      case OS_COMMANDS.architecture:
        getArchitecture();
        break;
      default:
        stdout.write(MESSAGES.invalid_input_command());
        break;
    }
  } else {
    stdout.write(MESSAGES.invalid_input_arguments());
  }
};
