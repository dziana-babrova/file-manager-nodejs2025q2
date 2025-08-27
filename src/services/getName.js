import { getArg } from '../utils/getArg.js';

export const getName = () => {
  const USERNAME_VARIABLE = '--username';
  const DEFAULT_USERNAME = 'anonymous';

  return getArg(USERNAME_VARIABLE, DEFAULT_USERNAME);
};
