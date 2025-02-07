//importo dal file js la struttura per il calcolo
import { calculateInvestmentResults, formatter } from "../util/investment.js"

//passo una prop dal file app.jsx che può essere il valore iniziale o quello dell' utente
export default function Result({ input }) {
    //creo una costante per estrapolare il risultato
    const resultData = calculateInvestmentResults(input)
    //creo una costante per estrapolare l'investimento iniziale
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment

    return <table id="result">
        {/* creo la tabella */}
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {/* mappo i dati che mi arrivano dal calcolo */}
            {resultData.map(yearData => {
                //creo una costante per estrapolare gli interessi totali
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
                //creo una costante per estrapolare il totale investito
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest

                //ritorno i valori filtrati e formattati
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}