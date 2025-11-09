function increaseSalary(salaries, percent){
    if(!Array.isArray(salaries)){
        throw new Error("Primul par trb sa fie array de sal.")
    }
    if(typeof percent !== "number"){
        throw new Error("Al doilea par trb sa fie un nr")
    }

    return salaries.map(salary => {
        if(typeof salary !== "number"){
            throw new Error("Array-ul trb sa aiba doar nr")
        }
        return salary + (salary * percent / 100);
    });
}

try {
    const salarii = [1000, 2000, 3000];
    const salariiNoi = increaseSalary(salarii, 10);
    console.log(salariiNoi); 

    increaseSalary("nu e array", 10);
} catch (err) {
    console.log("Eroare:", err.message);
}