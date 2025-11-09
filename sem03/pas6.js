const persoane = [
    { nume: "Ana", varsta: 25 },
    { nume: "Ion", varsta: 30 },
    { nume: "Maria", varsta: 22 }
];

function sorteazaArray(array, cheie) {
    return array.slice().sort((a, b) => {
        if (typeof a[cheie] === "string") {
            return a[cheie].localeCompare(b[cheie]);
        } else {
            return a[cheie] - b[cheie];
        }
    });
}
console.log(sorteazaArray(persoane, "nume"));

console.log(sorteazaArray(persoane, "varsta"));