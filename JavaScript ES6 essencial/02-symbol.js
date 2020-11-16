// Symbol -> atributo único. Não dá para sobrescrever as propriedades. Não são enumerators

const symbol1 = Symbol('nome');
const symbol2 = Symbol('nome');

// Symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 == symbol2);

// Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Cinthya',
    [nameSymbol2]: 'Moreira',
    lastName: 'Lins'
};

console.log(user);