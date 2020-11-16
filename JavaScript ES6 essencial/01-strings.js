const text = 'texto';

const textSize = text.length;
console.log(textSize);

const splitted = text.split('x');
console.log(splitted);

const replaced = text.replace(text, 'txet');
console.log(replaced);

const sliced = text.slice(-1);
console.log(sliced);

const slicedTwo = text.slice(0, -1);
console.log(slicedTwo);

const slicedThree = text.slice(1);
console.log(slicedThree);

const twoCharsBeforeFirstPos = text.substr(0, 2);
console.log(twoCharsBeforeFirstPos);