const array = [0,1,2,3,4,5];
// console.log(array)
array.forEach(item => {
    if(item %2 === 0){
        console.log(`o num ${item} é par`);
    } else {
        console.log(`o num ${item} é ímpar`)
    }
});
