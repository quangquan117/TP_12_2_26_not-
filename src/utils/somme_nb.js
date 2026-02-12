export function sommeNb(nb){
    let resulte = 0;
    
    for (; nb != 0; nb = Math.trunc(nb / 10)) {
        resulte += nb%10;
    }
    return resulte
}