const users = ['gui', 'isabel', 'joão'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'gui',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'isabel',
        age: 43,
        gender: gender.WOMAN
    },
    {
        name: 'joão',
        age: 18,
        gender: gender.MAN
    }
];

console.log('itens:', persons.length);

console.log('é array?', Array.isArray(persons));

// iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`nome: ${person.name}`);
});

persons.forEach((person, index, arr) => {
    console.log(`nome: ${person.name} index: ${index}`, arr);
});

// filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nOnly man:', mens);

// retornar um novo
const personWithCourse = persons.map(person => {
    person.course = 'intro ao JS';
    return person;
});

console.log('\nPessoas com a add de course:', personWithCourse);

// transformar um array em outro tipo
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas:', totalAge);

// Juntando operações
const totalEvenAge = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age,person) => {
                            age += person.age;
                            return age;
                        }, 0);

console.log('\nSoma de idade das pessoas que tem idade par:', totalEvenAge);