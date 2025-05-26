import { useEffect, useState } from "react"

export function Exemplo1() {

    const [numero, setNumero] = useState(0)

    useEffect(() => {
        console.log(`O estado numero mudou. Seu valor agora e ${numero}`)
    }, [numero])


    return (

        <section>
            <h2>Exemplo 1</h2>
            

            <div>
                <h3>Numero: {numero}</h3>
                <button onClick={() => {setNumero(numero + 1)}}>Aumentar</button>
            </div>
        </section>
    )
}