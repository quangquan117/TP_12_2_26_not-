function find_max(tab){
    let max = 0;
    let where = 0;

    tab.forEach(nb, index => {
        if (nb > max){
            max = nb;
            where = index;
        }
    });
}

export function triangle(a, b, c){
    let tab = [a, b, c]

    console.log(find_max(tab))
}