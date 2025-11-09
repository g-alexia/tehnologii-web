const sampleArray = [1, 2, 3, 4, 5];

const reduce = (array, callback, initValue) => {
    let acc = initValue;
    for(const element of array){
        acc = callback(acc, element);
    }
    return acc;
};

const sum = reduce(sampleArray, (acc, x) => acc + x, 0);
console.log(sum); 