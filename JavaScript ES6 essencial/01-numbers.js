const n = 12.3453;

const numToString = n.toString();
console.log(typeof numToString);

const twoDecimals = n.toFixed(2);
console.log(twoDecimals);

const stringToFloat = parseFloat(numToString);
console.log(typeof stringToFloat);

const stringToInt = parseInt(numToString);
console.log(typeof stringToInt);