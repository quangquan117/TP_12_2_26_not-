import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { nbOcurance } from './utils/nb_ocurance'

function App() {
  const [count, setCount] = useState(0)
  const tab = [2, 2, 3, 4, 5, 6, 7, 8, 9, 2]
  const recherche = 2

  let reponse = nbOcurance(tab, recherche);

  console.log("Exercice 1:\n recherche " + recherche + " dans " + tab + " la reponse est : " + reponse)

  return (
    <>
      
    </>
  )
}

export default App
