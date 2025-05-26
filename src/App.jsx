import { Exemplo1 } from "./components/Exemplo1";
import { Exemplo2 } from "./components/Exemplo2";
import { Header } from "./components/Header";

export function App() {
  return (
    <>

      <Header />

      <main>
        <Exemplo1 />
        <Exemplo2 />
      </main>
    </>
  )
}