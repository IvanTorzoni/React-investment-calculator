import { useState } from "react"

//crea la funzione per l'oggetto. 
export default function UserInput() {
    //Crea uno state con un oggetto JS
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })

    //crea la funzione al cambio del valore dove inputIdentifier è l' oggetto dello state e new value sarà il valore inserito dall'utente
    function handleChange(inputIdentifier, newValue) {
        //setto userInput dicendo che il valore precedente lo deve prendere dalla copia dell' oggetto JS dello state (creo un nuovo oggetto tramite spread operator) e l'identifier sarà il nuovo valore dell' utente
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        });
    }

    return <section id="user-input">
        <div className="input-group">
            {/* creo gli input dove value sarà inizialmente il valore dell'oggetto mentro al richiamo della funzione tramite onChange, il valore verrà modificato con il nuovo valore inserito dall' utente*/}
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={userInput.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(event) => handleChange('expectedReturn', event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={userInput.duration} onChange={(event) => handleChange('duration', event.target.value)}/>
            </p>
        </div>
    </section>
}