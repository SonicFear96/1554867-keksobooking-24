import { getRandomPositiveInteger } from './get-random-positive-integer.js';

const numAvatarCache = [];
const getUniqueTwoDigitsNum = (min, max) => {
  const uniqueAvatarNum = getRandomPositiveInteger(min, max);
  if (numAvatarCache.includes(uniqueAvatarNum)) {
    return getUniqueTwoDigitsNum(min, max);
  }
  numAvatarCache.push(uniqueAvatarNum);
  return uniqueAvatarNum;
};

const uniqueNumAvatarArr = [];
const getAvatar = () => {
  for (let index = 0; index < 10; index++) {
    const uniqueAvatarNum = getUniqueTwoDigitsNum(1, 10);
    uniqueNumAvatarArr.push(uniqueAvatarNum);
    if (uniqueAvatarNum < 10) {
      return `img/avatars/user0${uniqueAvatarNum}.png`;
    }
    return `img/avatars/user${uniqueAvatarNum}.png`;
  }
};

export { getAvatar };
