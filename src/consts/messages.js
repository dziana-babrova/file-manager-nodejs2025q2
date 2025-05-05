export const MESSAGES = {
  welcome: (name) => `Welcome to the File Manager, ${name}!\n`,
  goodbye: (name) => `Thank you for using File Manager, ${name}, goodbye!\n`,
  working_directory: (path) => `You are currently in ${path}\nPlease print a command:\n`,
  invalid_input_command: () => `Invalid input. Command doesn't exist`,
  invalid_input_arguments: () => `Invalid input. Mandatory arguments are missing`,
  operation_failed: () => 'Operation failed',
  operation_failed_path: (filename) =>
    `Operation failed. The path cannot be absolute. Provide a ${filename}`,
};
