import chromeIcon from './browser-chrome.svg';
import noImageIcon from '../no-image.svg';

const browserIcons = {
  chrome: chromeIcon,
  noname: noImageIcon,
};

const getBrowserIcon = name => {
  return browserIcons[name] || browserIcons.noname;
}

export default getBrowserIcon;