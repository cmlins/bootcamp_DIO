let user = {
    name: 'Cinthya'
};

user.name = 'Cinthya2';
user['name'] = 'Cinthya3';

const prop = 'name';
user[prop] = 'Cinthya4';

user.lastName = 'Lins';

// delete user.name;

function getProp (prop) {
    return user[prop]
};

const chaves = Object.keys(user);
console.log(chaves);

const valores = Object.values(user);
console.log(valores);

const listaProps = Object.entries(user);
console.log(listaProps);

const assigN  = Object.assign(user, {fullName: 'Cinthya Lins'});
console.log(assigN);
console.log(Object.assign({}, user, {age: 37}));

// Previne tds as alterações em um objeto
const newObj = {foo : 'bar'};
Object.freeze(newObj);

newObj.foo = 'changed';
delete newObj.foo;
newObj.bar = 'foo';

console.log(newObj);

// Permite apenas alterações de propriedades existentes em um objeto, não consegue deletar ou criar nova propriedade
const person = { name : 'Cinthya' };
Object.seal(person);

person.name = 'Cinthya Lins';
delete person.name;
person.age = 37;

console.log(person);