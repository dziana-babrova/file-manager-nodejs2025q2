export const parseArgs = (input) => {
  const regex = /(['"`][^'"`]+['"`]|\S+)/g;

  let match;
  const extractedArgs = [];

  while ((match = regex.exec(input)) !== null) {
    const parsedArg = match[1] ? match[1].replace(/^['"`]|['"`]$/g, '') : match[0];
    extractedArgs.push(parsedArg);
  }

  return extractedArgs;
};
