import Calculadora from "./components/calculadora"
import ListaDeNombres from "./components/listaNombres"


export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world! esto tiene Tailwind CSS
      </h1>
      <div>
        <ListaDeNombres />
      </div>
      <div>
        <Calculadora />
      </div>

    </>
  )
}