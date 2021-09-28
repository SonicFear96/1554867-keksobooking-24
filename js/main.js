// math.floor - округление

function getRandomNumber(min, max) {
  if (max > min && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return false;
  }
}

getRandomNumber(1, 100);

function getRandomNumberCoordination(min, max, numberSymbol) {
  if (max > min && min >= 0 && numberSymbol >= 0) {
    return (Math.random() * (max - min + 1) + min).toFixed(numberSymbol);
  } else {
    return false;
  }
}

getRandomNumberCoordination(10, 100, 3);
