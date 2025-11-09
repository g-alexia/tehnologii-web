nr = [2, 3, 4, 5, 6]
div = 2
function sumNrDivcu2(nr, div) {
    return nr
    .filter(num => num % div === 0)
    .reduce((acc, num) => acc + num, 0);
} 
console.log(sumNrDivcu2(nr, div));