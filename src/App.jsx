import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"
import Result from "./components/Result"

function App() {
  //Crea uno state con un oggetto JS
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  //creo una costante per mostrare la tabella in modo dinamico
  const inputIsValid = userInput.duration >= 1

  //crea la funzione al cambio del valore dove inputIdentifier è l' oggetto dello state e new value sarà il valore inserito dall'utente
  function handleChange(inputIdentifier, newValue) {
    //setto userInput dicendo che il valore precedente lo deve prendere dalla copia dell' oggetto JS dello state (creo un nuovo oggetto tramite spread operator) e l'identifier sarà il nuovo valore dell' utente
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        //aggiungo il + prima di newValue per evitare errori di tipo da parte di JS, senza avverrebbe una concatenazione tra stringhe
        [inputIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      {/* al componente UserInput assegno delle props, userInput sara il valore che avra quell'input, onChange richiama la funzione che permetterà di cambiare il valore all' input */}
      <UserInput userInput={userInput} onChange={handleChange} />
      {/* al componente Result assegno delle props, input sara il valore iniziale dell' oggetto o il valore inserito dall' utente */}
      {/* tramite la costante posso mostrare la tabella o il messaggio in base al valore inserito */}
      {inputIsValid && <Result input={userInput} />}
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
    </>
  )

}

export default App
