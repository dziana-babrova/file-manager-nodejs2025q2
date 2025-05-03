import { access } from 'node:fs/promises';

export const doesExist = async (path) => {
  return access(path)
    .then(() => true)
    .catch(() => false);
};
