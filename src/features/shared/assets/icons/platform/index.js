import desktopIcon from './desktop.svg';
import noImageIcon from '../no-image.svg';

const platformIcons = {
  desktop: desktopIcon,
  noname: noImageIcon,
};

const getPlatformIcon = name => {
  return platformIcons[name] || platformIcons.noname;
}

export default getPlatformIcon;