export function fill_tab(line, col){
    let tab = []
    let tab_line = []

    if (!Number.isInteger(line) || !Number.isInteger(col))
        return null

    for(let i=0; i < line; i += 1){
        for(let y=0; y < col; y += 1){
            tab_line.push(0);
        }
        tab.push(tab_line);
        tab_line = [];
    }
    console.log(tab)
}