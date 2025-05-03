import { cwd } from 'node:process';
import { readdir, stat } from 'node:fs/promises';
import { getAbsolutePath } from '../../utils/getAbsolutePath.js';

const TYPES = {
  directory: 'Directory',
  file: 'File',
  unknown: 'Unknown type',
};

export const listContent = async () => {
  const currentDir = cwd();

  const files = await readdir(currentDir);
  const tableData = await Promise.all(
    files.map(async (file) => {
      const filePath = getAbsolutePath(file);
      const fileStat = await stat(filePath);
      const type = fileStat.isDirectory()
        ? TYPES.directory
        : fileStat.isFile()
        ? TYPES.file
        : TYPES.unknown;
      return { Name: file, type };
    }),
  );

  const sortedTableData = [
    ...tableData.filter((file) => file.type === TYPES.directory).sort((a, b) => a - b),
    ...tableData.filter((file) => file.type === TYPES.file).sort((a, b) => a - b),
  ];

  console.table(sortedTableData);
};
