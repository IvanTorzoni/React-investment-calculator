//crea la funzione per l'oggetto. Faccio accettare alla funzione delle prop che arrivano da app.jsx
export default function UserInput({onChange, userInput}) {
    return <section id="user-input">
        <div className="input-group">
            {/* creo gli input dove VALUE sarà inizialmente il valore dell'oggetto che arriva da app.jsx o il valore modificato, mentre ONCHANGE prenderà il valore che inserisce l'utente da app.jsx */}
            <p>
                <label>Initial Investment</label>
                <input type="number" required value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)}/>
            </p>
        </div>
    </section>
}