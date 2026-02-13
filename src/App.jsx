import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { nbOcurance } from './utils/nb_ocurance'
import { paladrome } from './utils/paladrome'
import { second_max } from './utils/second_max'
import { sommeNb } from './utils/somme_nb'
import { somme_nb_bis } from './utils/Somme_nb_bis'
import { fill_tab } from './utils/fill_tab'
import { replaceByZero } from './utils/replaceByZero'
import { moyen } from './utils/moyen'
import { replaceCell } from './utils/replaceCell'
import { triangle } from './utils/triangle'
import { chiffrement } from './utils/chiffrement'

function App() {
  const [count, setCount] = useState(0)
  const tab = [2, 2, 3, 4, 5, 6, 7, 8, 9, 2]
  const recherche = 2
  const testpalindrome = "kaya"
  const number_4and5 = 4729
  const hello_world = "helloworld"
  const tableau_2dimention = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const tableau_ex9 = [
    [1, 2],
    [3, 4],
    [4, 5]
  ]

  let reponse = nbOcurance(tab, recherche);
  console.log("Exercice 1: recherche " + recherche + " dans " + tab + " la reponse est : " + reponse)

  reponse = paladrome(testpalindrome);
  if (reponse)
    console.log("Exercice 2 : paladrome")
  else
    console.log("Exercice 2 : no paladrome")

  reponse = second_max(tab)
  console.log("Exercice 3: le second plus grand est " + reponse)

  reponse = sommeNb(number_4and5)
  console.log("Exercice 4 : la somme est " + reponse)

  console.log("Exercice 5 : la somme est " + somme_nb_bis(number_4and5))

  fill_tab(5, 5);

  console.log("Exercice 7 : le nouveua mot est " + replaceByZero(hello_world, 2))

  console.log("Exercice 8 : la moyen est " + moyen(tableau_2dimention))

  console.log(replaceCell(tableau_ex9, 1, 0, 20))

  // console.log(triangle(1,2,3));

  console.log("Chiffrement : " + chiffrement("BONJOUR", "CLE"))

  return (
    <>

    </>
  )
}

export default App
