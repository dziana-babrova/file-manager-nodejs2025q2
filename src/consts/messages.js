export const MESSAGES = {
  welcome: (name) => `Welcome to the File Manager, ${name}!\n`,
  goodbye: (name) => `Thank you for using File Manager, ${name}, goodbye!\n`,
  working_directory: (path) => `You are currently in ${path}\nPlease print a command:\n`,
  invalid_input: () => 'Invalid input\n',
  operation_failed: () => 'Operation failed\n',
};
