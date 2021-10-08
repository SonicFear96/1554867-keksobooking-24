import { getRandomPositiveInteger } from './get-random-positive-integer.js';
const getRandomArray = (elements) =>
  elements
    .sort(() => Math.random() - Math.random())
    .slice(0, getRandomPositiveInteger(0, elements.length - 1));

export { getRandomArray };
