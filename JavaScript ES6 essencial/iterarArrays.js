// forEach
const arr = [1,2,3,4,5];

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

arr.forEach(value => {
    console.log(`${value}`);
});

arr.forEach((item, index) => {
    console.log(index, item);
});

arr.forEach((item, index, arr) => {console.log(index, item, arr);});

// map

const arr2 = arr.map((item, index) => {
    console.log(index + item)
})

// flat - retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth)
// const arr3 = [1,2,[3,4,5,[6,7,8]]];

// arr3.flat(2);

// flatMap = map +flat de profundidade 1

// keys array iterator que tem as chaves para os elementos do array

const arrIterator = arr.keys()

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next()+'\n');

// values array iterator que tem as valores para os elementos do array

const arrIterator2 = arr.values()

console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());

// entries array iterator 

const arrIterator3 = arr.entries()

console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());

// find - busca no array e retorna o primeiro item que respeita uma condição

const firstFind = arr.find(value => value >2);

console.log(firstFind);

// findIndex - busca no array e retorna o primeiro index do elemento que respeita uma condição
const firstIndex = arr.find(value => value >2);

console.log(firstIndex);

// filter - busca no array e retorna o todos os elementos que respeitam uma condição

const greaterTwo = arr.filter(value => value >2);

console.log(greaterTwo);

// indexOf - retorna o index do primeiro index em uma condição
// includes - boolenano que retorna se algum elemento estiver no array
// some - retorna um booleano verificando se pelo menos um item de um array satisfaz a condição
// every - retorna um booleano verificando se todos os itens de um array satisfaz a condição

// join - transforma um array em outro tipo de dado
const joinTudo = arr.join('-');
console.log(joinTudo);

// reduce - retorna um novo tipo de dado iterando cada posição de um array
const reduceLista = arr.reduce((total, value) => total += value, 0);
console.log(reduceLista);

const frutas = ["melancia", "laranja", "acerola"];
// frutas.shift();
// frutas.pop();
console.log(frutas.slice(2, 1))
// frutas.unshift();