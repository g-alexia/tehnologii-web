const formatStr = (s, par) => {
    let modified = s;
    for(const key in par){
        if(modified.indexOf('{' + key + '}') !== - 1){
            modified = modified.replaceAll('{' + key + '}', par[key])
        }
    }
    return modified;
}

console.log(formatStr("un {substantiv} este {adjectiv}", { 
    substantiv: "căluț", 
    adjectiv: "drăguț" 
}));