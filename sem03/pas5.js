const text = "javascript este minunat";
const dict = ["este"];

function textCenzurat(text, cuvCenz){
    return text
        .split(" ")
        .map(cuvant => {
            let punctuatie = '';
            if (/[.,!?]$/.test(cuvant)) {
                punctuatie = cuvant[cuvant.length - 1];
                cuvant = cuvant.slice(0, -1);
            }
            if(cuvCenz.includes(cuvant.toLowerCase())){
                if (cuvant.length > 2) {
                    cuvant = cuvant[0] + "*".repeat(cuvant.length - 2) + cuvant[cuvant.length - 1];
                } else {
                    cuvant = cuvant[0] + "*";
                }
            }
            return cuvant + punctuatie;
        })
        .join(" ");
}

console.log(textCenzurat(text, dict));