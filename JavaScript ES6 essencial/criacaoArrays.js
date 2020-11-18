const arr = [1,2,3];
const arr2 = new Array(1);
const arr3 = Array.of('joão','eu', 'carlos');
const arr4 = Array(3);
const arr5 = Array('joão','eu', 'carlos');

arr5.push('eu');
arr5.pop();

arr5.unshift('mainha');
arr5.shift();

const junta = arr5.concat(arr);

const j2 = junta.slice(0,1);
const j3 = junta.splice(2);
const j4 = junta.splice(0, 0, 'first');

console.log(arr2);
console.log(j4);