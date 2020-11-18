'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split === String.prototype.split);

console.log(myText.constructor === String);

// __proto__ aponta para prototype que aponta para uma String

function Animal(){
    this.qtdPatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdPatas);

//  ///////////////////////
function Pessoa(name) {
    this.name = name;
}

const p = new Pessoa('Cinthya');

console.log(p)

/////////////////

function Pessoa(name) {
    this.name = name;

    return {
        name: 'Teste'
    };
}

const p2 = new Pessoa("Cinthya2");

p2 //print Teste, pq retorna o que está no return

///////////

console.log(cachorro instanceof Animal);

///////////////

function Animal(){
    this.qtdPatas;
    this.movimentar = function(){}
}

function Cachorro(morde){
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function(){
        console.log('au au')
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

// console.log(pug);
// console.log(pitbull);

////////////

function Animal(){}

Animal.prototype.qtdPatas = 0;
Animal.prototype.movimentar = function(){}

function Cachorro(morde){
    this.qtdPatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
    console.log('au auuuuu')
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
