function charToInt(str){
    let arrayint = []; //init arrayint

    for(let i = 0; i < str.length; i++){ //boucle pour parcourir str
        if (str[i] == " ") //si il y a un espace, on ajoute 32 dans arrayint
            arrayint.push(32);
        else
            arrayint.push(str.charCodeAt(i) - 64); //sinon on convertis le char en int et on ajoute dans arrayint
    }
    return arrayint;
}


export function chiffrement(str, key){
    str = str.toUpperCase(); //mise en maj
    key = key.toUpperCase(); //mise en maj
    let strInt = charToInt(str); //convertis str en int
    let keyInt = charToInt(key); //convertis key en int
    let result = ""; //init result pour le chiffrement
    
    for(let i = 0, y = 0; i < strInt.length; i++, y++){ //boucle pour parcourir strInt et keyInt
        if (y == keyInt.length) //si y est au bout de keyInt, on recommence a 0
            y = 0;
        if (strInt[i] == 32) //si il y a un espace, on ajoute un espace dans le resultat
            result += " ";
        else 
            result += String.fromCharCode((strInt[i] + keyInt[y]) % 26 + 65); //si non on fait A+B modulo 26 et reconvertis en char et on ajoute au resultat
    }
    return result;
}