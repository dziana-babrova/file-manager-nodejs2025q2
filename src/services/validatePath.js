import { MESSAGES } from '../consts/messages.js';

export const validateAndExecute = async (paths, required, callback) => {
  try {
    if (paths.length >= required) {
      await callback();
    } else {
      console.log(MESSAGES.invalid_input_arguments());
    }
  } catch {
    console.log(MESSAGES.operation_failed());
  }
};
