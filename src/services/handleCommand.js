export const handleCommand = async (command, app) => {
  switch (command) {
    case '.exit':
      app.close();
      break;

    default:
      break;
  }
};
