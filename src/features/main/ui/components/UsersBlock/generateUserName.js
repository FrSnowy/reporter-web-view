const status = [
  'Незнакомый',
  'Скрытный',
  'Крадущийся',
  'Тихий',
  'Бесшнумный',
  'Незаметный',
];

const suffix = [
  'три',
  'вело',
  'би',
  'носо',
  'ти',
  'ди',
  'ови',
  'пте',
];

const main = [
  'носе',
  'пло',
  'зав',
  'дак',
  'мон',
  'рап',
  'рано',
];

const postfix = [
  'завр',
  'док',
  'тиль',
  'тор',
  'дон',
  'пс',
];

const generateName = () => {
  const innerStatus = status[Math.floor(Math.random() * status.length)];
  const firstPart = suffix[Math.floor(Math.random() * suffix.length)];
  const mainPart = main[Math.floor(Math.random() * main.length)];
  const postPart = postfix[Math.floor(Math.random() * postfix.length)];

  return `${innerStatus} ${firstPart}${mainPart}${postPart}`;
};

export default generateName;