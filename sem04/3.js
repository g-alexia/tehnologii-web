function fctExp(baza){
    const cache = [1]; 

    const exp = (power) => {
        if(power < cache.length){
            console.log('gasit ' + baza + '^' + power);
            return cache[power]; 
        } else {
            console.log('calculat ' + baza + '^' + power);
            cache[power] = baza * exp(power - 1);
            return cache[power];
        }
    }

    return exp;
}

const pow2 = fctExp(2);

console.log(pow2(0)); 
console.log(pow2(1)); 
console.log(pow2(3)); 
console.log(pow2(5)); 
console.log(pow2(3)); 
