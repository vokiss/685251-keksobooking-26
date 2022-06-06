function getRandom(min, max) {
  if (min >= max || min < 0 || max < 0) {
    console.log('ОШИБКА! диапазон может быть только положительный, включая ноль, первый аргумент должен быть меньше второго');
  } else {
    return Math.round(Math.random() * (max - min)) + min;}
}
getRandom(1,100);

function getRandomWithDigits(min, max, digits) {
  if (min >= max || min < 0 || max < 0) {
    console.log('ОШИБКА! диапазон может быть только положительный, включая ноль, первый аргумент должен быть меньше второго');
  } else {
    const x = Math.round(Math.random() * (max - min + 1)) + min;
    return x.toFixed([digits]);}
}
getRandomWithDigits(1.00000,33.55555,5);
