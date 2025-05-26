import axios from "axios"
import { useState, useEffect } from "react"


export function Exemplo2() {
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [estado, setEstado] = useState ("")
    const [uf, setUf] = useState("")

    useEffect(() => {
        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
                setLogradouro(response.data.logradouro)
                setBairro(response.data.bairro)
                setLocalidade(response.data.localidade)
                setEstado(response.data.estado)
                setUf(response.data.uf)
            })
        }
    }, [cep])

    return (
        <section>
            <h2>Exemplo 2: Buscar endereco pelo CEP</h2>

            <div>
                <input type="number" placeholder="Digite o CEP" onChange={(input) => setCep(input.target.value)}/>

                {cep.length === 8 && (
                    <>
                        <h3>Seu endereço:</h3>
                        <ul>
                            <li>Logradouro: {logradouro}</li>
                            <li>Bairro: {bairro}</li>
                            <li>Localidade: {localidade}</li>
                            <li>Estado: {estado}</li>
                            <li>UF: {uf}</li>
                        </ul>
                    </>
                )}
            </div>
        </section>
    )
}