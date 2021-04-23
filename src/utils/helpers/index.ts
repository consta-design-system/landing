import { browserName, browserVersion } from 'react-device-detect';

export const getBrowserCompatibility = () => {
  let isCompatible = false;
  switch (browserName) {
    case 'Chrome':
      if (Number(browserVersion) >= 79) {
        isCompatible = true;
      }
      break;
    case 'Edge':
      if (Number(browserVersion) >= 79) {
        isCompatible = true;
      }
      break;
    case 'Firefox':
      if (Number(browserVersion) >= 75) {
        isCompatible = true;
      }
      break;
    case 'Opera':
      if (Number(browserVersion) >= 66) {
        isCompatible = true;
      }
      break;
    case 'Safari':
      if (Number(browserVersion) >= 13) {
        isCompatible = true;
      }
      break;
  }

  return {
    browserName,
    browserVersion,
    isCompatible,
  };
};
