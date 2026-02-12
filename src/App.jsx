import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { nbOcurance } from './utils/nb_ocurance'
import { paladrome } from './utils/paladrome'
import { second_max } from './utils/second_max'
import { sommeNb } from './utils/somme_nb'

function App() {
  const [count, setCount] = useState(0)
  const tab = [2, 2, 3, 4, 5, 6, 7, 8, 9, 2]
  const recherche = 2
  const testpalindrome = "kaya"

  let reponse = nbOcurance(tab, recherche);
  console.log("Exercice 1: recherche " + recherche + " dans " + tab + " la reponse est : " + reponse)

  reponse = paladrome(testpalindrome);
  if (reponse)
    console.log("Exercice 2 : paladrome")
  else
    console.log("Exercice 2 : no paladrome")

  reponse = second_max(tab)
  console.log("Exercice 3: le second plus grand est " + reponse)

  reponse = sommeNb(4729)
  console.log("Exercice 4 : la somme est " + reponse)

  return (
    <>

    </>
  )
}

export default App
