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

function App() {
  const [count, setCount] = useState(0)
  const tab = [2, 2, 3, 4, 5, 6, 7, 8, 9, 2]
  const recherche = 2
  const testpalindrome = "kaya"
  const number_4and5 = 4729

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

  return (
    <>

    </>
  )
}

export default App
