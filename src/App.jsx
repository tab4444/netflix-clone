import { useState } from 'react'
import ComponenteA from "./components/ComponenteA"
import ComponenteB from "./components/ComponenteB"

const App = () => {
  // hook -> useState: modificar el valor de una variable (funcion modificadora)

  // aca vamos a definir variables y funciones
  const [contador, setContador] = useState(0)
  const [mensaje, setMensaje] = useState("Hola mundo!")

  const comision = "38830"
  const curso = "React"

  const alumnos = ["A","B","C","D"]

  const persona = {
    nombre: "Thiago",
    apellido: "Block"
  }

  return (
    // se usa className, no class
    // al ser un return, solo se puede retornar un valor, asi que si queremos devolver varios elementos debemos encerrarlos en un contenedor padre
    <>
      {/* con las {} llamamos las variables definidas dentro de la funcion */}
      <ComponenteA comision={comision} curso={curso} alumnos={alumnos} persona={persona}/>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador +1)}>+</button>
      <button onClick={() => setContador(contador -1)}>+</button>
      <button onClick={() => setContador(0)}>reset contador</button>

      <p>Mensaje: {mensaje}</p>
      <button onClick={() => setMensaje("Chau mundo!")}>chau</button>

      <ComponenteB/>
    </>
  )
}

export default App