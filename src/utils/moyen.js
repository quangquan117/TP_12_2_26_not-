export function moyen(tab){
    let result = 0;
    let ocurance = 0;

    tab.forEach(line => {
        line.forEach(nb =>{
            ocurance += 1;
            result += nb;
        })
    });
    result = Math.trunc(result/ocurance);

    return result
}