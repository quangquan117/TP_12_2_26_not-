export function paladrome(str){
    let tempStr = str.split('').reverse().join('');

    if (tempStr.localeCompare(str) == 0){
        return true
    } else
        return false
}