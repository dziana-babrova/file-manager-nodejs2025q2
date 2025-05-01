import process from 'node:process';

export const getArg = (key, defaultValue = undefined) => {
  const arg = process.argv.find((value) => value.startsWith(`${key}=`));
  const value = arg?.split('=')[1];
  return value || defaultValue;
};
