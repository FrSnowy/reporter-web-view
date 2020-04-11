export const getColor = (name, transparency, theme) => {
  if (!theme) {
    console.error('No theme founded');
    return null;
  }

  if (!theme[name]) {
    console.error(`No color with name ${name}`);
    return null;
  }

  const color = theme[name];
  const [R, G, B] = color.split(',');
  return `rgba(${R}, ${G}, ${B}, ${transparency / 100})`;
}