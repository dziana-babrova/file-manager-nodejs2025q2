import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { getName } from './services/getName.js';
import { handleCommand } from './services/handleCommand.js';

const MESSAGES = {
  welcome: (name) => `Welcome to the File Manager, ${name}!\n`,
  goodbye: (name) => `Thank you for using File Manager, ${name}, goodbye!\n`,
  working_directory: (path) => `You are currently in ${path}\n Please print a command:\n`,
  invalid_input: () => 'Invalid input\n',
  operation_failed: () => 'Operation failed\n',
};

const startApp = async () => {
  const app = readline.createInterface({ input, output });
  const name = getName();

  output.write(MESSAGES.welcome(name));

  app.setPrompt(MESSAGES.working_directory('path'));
  app.prompt();

  app.on('line', (value) => {
    handleCommand(value, app, MESSAGES);
    app.prompt();
  });

  app.on('close', () => {
    output.write(MESSAGES.goodbye(name));
    process.exit(0);
  });
};

startApp();
