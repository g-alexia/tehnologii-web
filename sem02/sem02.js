// pas 2  -- arrow function
let stringFunc = (array) => array.join(' ');
console.log(stringFunc(["Hello", "World", "!"]))

// pas3 -- functie care sa returneze nr de caractere dif intre 2 stringuri
function diferentaCaractere(string1, string2){
    if(string1.length == string2.length){

        let sum = 0;
        for(let i = 0; i <= string1.length; i++){
            if(string1[i] !== string2[i]){
                sum++;
            }
        }
        return sum;
    }else{
        return -1;
    }
}

console.log(diferentaCaractere('mama', 'mama'))
console.log(diferentaCaractere('mama', 'tata'))
console.log(diferentaCaractere('mamaa', 'tata'))

// pas4 --  functie care primeste ca parametru o lista cu numere si returneaza un array cu acele numere
function transformaListaInArray(lista){
    let arr = [];
    for(let i = 0; i < lista.length; i++){
        arr.push(lista[i]);
    }
    return arr;
}

console.log(transformaListaInArray([1, 2, 3, 4,]));


// pas5 -- functie care intercaleaza 2 array-uri cu acelasi nr de elemente
function intercaalare(arr1, arr2){
    if(arr1.length == arr2.length ){
        let arr3 = [];
        for(let i = 0; i < arr1.length; i++){
            arr3.push(arr1[i], arr2[i]);
        }
        return arr3;
    }
}

console.log(intercaalare([1, 2, 3,], [4, 5, 6]))

// pas 6 --fibonacci
const fibonacci = (n) => {
    let a = 0;
    let b = 1;
    let c;

    for(let i = 3; i <= n; i++){
        c = a+b;
        a = b;
        b = c;
    }
    return b;
}

if(process.argv.length < 3){
    console.log('not enough params')
}else{
    const n = parseInt(process.argv[2]);
    if(n < 1){
        console.log('introdu un nr pozitiv')
    }else{
        console.log(fibonacci(n));
    }
}


// pas 7 -- nr aparitii ale unei litere in text
const nrAparitiiLitere = (text) => {
    const letters = text.split('');
    const result = {};
    for (let letter of letters){
        if(letter == ' ') continue;
        if(letter in result){
            result[letter]++
        }
        else{
            result[letter] = 1
        }
    }
    for(let letter in result){
        result[letter] /= letters.length
    }
    return result

}

const txt = "ana are mere"
console.log(nrAparitiiLitere(txt))