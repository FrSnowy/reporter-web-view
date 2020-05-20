import AUTH from "../../auth/locale"
import MAIN from '../../main/locale';
import HEADER from "../Header/locale";

const TEXT = {
  AUTH,
  MAIN,
  HEADER,
  PLATFORM: {
    DESKTOP: {
      ru: 'Персональный компьютер',
    },
  }
};

const getText = (type, locale = 'ru') => name => {
  if (!name || !type) {
    console.warn('No name or type presented')
    return null;
  }
  if (!TEXT[type]) {
    console.warn(`No ${type} in TEXT presented`);
    return null;
  }
  if (!TEXT[type][name]) {
    console.warn(`No ${name} in TEXT[${type}] presented`)
    return null;
  }
  if (!TEXT[type][name][locale]) {
    console.warn(`No locale ${locale} in TEXT[${type}][${name}] presented`);
    return null;
  }

  return TEXT[type][name][locale];
}

export default getText;