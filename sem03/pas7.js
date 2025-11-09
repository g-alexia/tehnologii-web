const arr = [1, 2, 3, 4]
const medie = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;

console.log(medie(arr));