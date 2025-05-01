import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { getName } from './services/getName.js';

const MESSAGES = {
  welcome: (name) => `Welcome to the File Manager, ${name}!\n`,
  goodbye: (name) => `Thank you for using File Manager, ${name}, goodbye!\n`,
};

const startApp = async () => {
  const app = readline.createInterface({ input, output });
  const name = getName();

  output.write(MESSAGES.welcome(name));

  app.on('close', () => {
    output.write(MESSAGES.goodbye(name));
    process.exit(0);
  });
};

startApp();
