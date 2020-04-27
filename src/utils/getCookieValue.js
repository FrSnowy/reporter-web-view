const getCookieValue = cookieName => document.cookie.replace(new RegExp(`(?:(?:^|.*;*)${cookieName}*=*([^;]*).*$)|^.*$`), '$1');
export default getCookieValue;