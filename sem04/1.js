class Sir{
    constructor(start){
        if(start % 2 !== 0){
            start++;
        }
        this.curent = start;
    }

    next(){
        const rez = this.curent;
        this.curent += 2;
        return rez;
    }
}

const sir = new Sir(3);
for(let i = 0; i < 5; i++){
    console.log(sir.next());
}