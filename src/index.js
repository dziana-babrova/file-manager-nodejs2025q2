import os from 'node:os';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { getName } from './services/getName.js';
import { handleCommand } from './services/handleCommand.js';
import { MESSAGES } from './consts/messages.js';
import { handleCurrentDir } from './commands/fs/handleCurrentdir.js';

const startApp = async () => {
  const app = readline.createInterface({ input, output });
  const name = getName();

  output.write(MESSAGES.welcome(name));

  await handleCurrentDir(os.homedir(), app);

  app.on('line', async (value) => {
    await handleCommand(value, app);
    // app.prompt();
  });

  app.on('close', () => {
    output.write(MESSAGES.goodbye(name));
    process.exit(0);
  });
};

startApp();
