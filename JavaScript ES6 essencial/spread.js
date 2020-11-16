var partes = ['ombro', 'joelho'];
var musica = ['cabeça', ...partes, 'e', 'pés'];

console.log(musica);
// [ 'cabeça', 'ombro', 'joelho', 'e', 'pés' ]

function fn(x, y, z) {console.log(x,y,z)};
var args = [0, 1, 2];
fn(...args);

// in
// something in somethingItens

// Arrays
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicomoro');
console.log(0 in arvores);
console.log(3 in arvores);
console.log(6 in arvores);
console.log('cedro' in arvores);
console.log('length' in arvores); //length é uma propriedade de Array

// Objetos pré definidos
console.log("PI" in Math);
var minhaString = new String('coral');
console.log('length' in minhaString);

// Objetos personalizados
var meuCarro = {marca: 'Honda', modelo: "Accord", ano: 1998};
console.log("marca" in meuCarro);
console.log("modelo" in meuCarro);

// instanceof
// objeto instanceof tipoObjeto

var dia = new Date(2020, 11, 16);

if (dia instanceof Date){
    console.log('verdade');
}