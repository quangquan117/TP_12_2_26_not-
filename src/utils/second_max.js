export function second_max(tab){
    let max = 0;
    let secondM

    tab.forEach(nb => {
        if (nb > max) {
            secondM = max;
            max = nb;
        }
    })
    return secondM
}