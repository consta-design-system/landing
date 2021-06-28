import { browserName, browserVersion } from 'react-device-detect';

export const getBrowserCompatibility = () => {
  let isCompatible = true;

  if (browserName === 'IE') {
    isCompatible = false;
  }

  return {
    browserName,
    browserVersion,
    isCompatible,
  };
};
