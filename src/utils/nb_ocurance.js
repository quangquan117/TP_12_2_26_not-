export function nbOcurance(tab, Number){
    let nombre_d_occurance = 0;

    tab.forEach(nb => {
        if(nb == Number){
            nombre_d_occurance += 1;
        }
    });
    return nombre_d_occurance;
}