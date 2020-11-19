const pets = [
    {
        name: 'rex',
        type: 'dog',
        age:10,
        weigth: 20
    },
    {
        name: 'tonha',
        type: 'cat',
        age: 12,
        weigth: 3
    },
    {
        name: 'nemo',
        type: 'fish',
        age: 1,
        weigth: 1
    }, 
    {
        name: 'bob',
        type: 'dog',
        age:10,
        weigth: 15
    }
]

// filter
const greaterThanFive = (num) => {
    return num >= 5;
}
const greateriveYears = pets.filter(({age}) => greaterThanFive(age));

// map
const petNames = pets.map((pet) => {
    return pet.name
})

const doubleWeigth = pets.map((pet) => {
    return pet.weigth * 2;
})

// forEach
const forEachPetNames = [];

pets.forEach((pet) => {
    return forEachPetNames.push(pet.name);
})

// reduce
const sumWeigths = pets.reduce((total, pet) => {
    // console.log(`Total: ${total} Pet: ${pet.name}`)
    return total + pet.weigth
}, 0);

const sumWeigthAge = pets.reduce((total, pet) => {
    // console.log(`Total: ${total} Pet: ${pet.name}`)
    return {
        totalWeigth: total.totalWeigth + pet.weigth, 
        totalAge: total.totalAge + pet.age}
}, {totalWeigth: 0, totalAge: 0});

const dogsWeitgh = pets.reduce((total, pet) => {
    if(pet.type != 'dog') return total

    return total + pet.weigth
}, 0);

const totalDogsWeigth = pets
    .filter((pet) => {
        return pet.type === 'dog'
    })
    .reduce((total, pet) => {
        return total + pet.weigth
    },0)



console.log(totalDogsWeigth)