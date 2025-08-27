import { cpus } from 'node:os';

export const getCpus = () => {
  const data = cpus();
  const cpusNumber = data.length;
  const cpusInfo = data.reduce((acc, curr) => {
    acc.push({ model: curr.model, 'clock rate': `${curr.speed / 1000}GHz` });
    return acc;
  }, []);

  const result = {
    'overall amount of CPUS': cpusNumber,
    cpus: cpusInfo,
  };

  console.log(result);
};
