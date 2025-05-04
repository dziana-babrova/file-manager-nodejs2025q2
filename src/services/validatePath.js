import { stdout } from 'node:process';
import { MESSAGES } from '../consts/messages.js';

export const validateAndExecute = async (paths, required, callback) => {
  if (paths.length >= required) {
    await callback();
  } else {
    stdout.write(MESSAGES.invalid_input_arguments());
  }
};
