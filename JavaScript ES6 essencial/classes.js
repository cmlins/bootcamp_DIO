'use strict'

class Animal {
    constructor(qtdPatas) {
        this.qtdPatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = 4;
    }
}

const pug = new Cachorro(false);

console.log(pug);

// js não tem modificadores de acesso
// STATIC permite acessar métodos/atributos sem instanciar

// class Person {
//     let name = '';

//     constructor(initialName) {
//         this.name = initialName;
//     }

//     setName(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }
// }

class Person2 {
    static walk() {
        console.log('walking...');
    }
}
console.log(Person2.walk());