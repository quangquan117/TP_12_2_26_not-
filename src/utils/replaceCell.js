export function replaceCell(tab, i, j, n){
    if (tab.length != 3 || tab[0].length != 2 || !Number.isInteger(i) || !Number.isInteger(j) || !Number.isInteger(n))
        return null

    if (i > 2 || i < 0 || j > 1 || j < 0)
        return null

    tab[i][j] = n;

    return tab
}