import {
  ORIGINAL_SCRIPT_SRC,
  DELACON_SCRIPT_ID,
  loadScript,
} from './src/util/load-script';

const isNotServiceCentrePage = (pathname) => {
  if (typeof window !== 'undefined') {
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 3 && parts[0] === 'service-centres') {
      return false;
    }
  }
  return true;
};

export const onRouteUpdate = ({ location }) => {
  let existingScript = document.getElementById(DELACON_SCRIPT_ID);

  if (isNotServiceCentrePage(location.pathname) === true) {
    if (existingScript) {
      existingScript.remove();
    }

    existingScript = loadScript(
      DELACON_SCRIPT_ID,
      ORIGINAL_SCRIPT_SRC,
      false,
      true
    );
  }
};
