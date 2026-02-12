String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}


export function replaceByZero(str, n){
    for (let i = 0; i< str.length; i += 1){
        if ((i+1) % n == 0)
            str = str.replaceAt(i, "0");
    }
    return str
}