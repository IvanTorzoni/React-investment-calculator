//importo dal file js la struttura per il calcolo
import { calculateInvestmentResults } from "../util/investment.js"

//passo una prop dal file app.jsx che può essere il valore iniziale o quello dell' utente
export default function Result({ input }) {
    //creo una costante per estrapolare il risultato
    const resultData = calculateInvestmentResults(input)

    console.log(resultData);
    

    return <p>Results...</p>
}