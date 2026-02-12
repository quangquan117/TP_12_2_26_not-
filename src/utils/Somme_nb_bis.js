import { sommeNb } from "./somme_nb";

export function somme_nb_bis(number){
    let reponse = number;

    while(reponse > 9)
        reponse = sommeNb(reponse);

    return reponse;
}
