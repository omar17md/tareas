import Header from './components/Header'
import Tareas from './components/Tareas'
import AddTarea from './components/AddTarea'
import { useState } from "react"

function App() {

  const [mostrarForm, setMostrarForm] = useState(false)

  const [tareas, setTareas] = useState(
    [
        {
            id: 1,
            texto: 'Ir al cine',
            fecha: '02 de Febrero de 2022',
            terminada: true,
        },
        {
            id: 2,
            texto: 'Comprar en el supermercado',
            fecha: '10 de Febrero de 2022',
            terminada: false,
        },
        {
            id: 3,
            texto: 'Hacer app en React',
            fecha: '11 de Febrero de 2022',
            terminada: false,
        }
    ])

  // Eliminar una tarea
  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => 
      tarea.id !== id
    ))
  }

  // Marcar o desmarcar como terminada
  const toggleTarea = (id) => {
    setTareas(tareas.map((tarea) => tarea.id === id ? {...tarea, terminada: !tarea.terminada} : tarea))
  }

  // Agregar una tarea
  const addTarea = (tarea) =>{
    const id = Math.floor(Math.random() * 10000) + 1
    const nuevaTarea = {id, ...tarea}

    setTareas([...tareas, nuevaTarea])
  }

  return (
    <div className='container'>
      <Header onAdd={() => setMostrarForm(!mostrarForm)} mostrarForm={mostrarForm}/>
      {mostrarForm && <AddTarea onAdd={addTarea}/>}
      {tareas.length > 0 ?
        <Tareas tareas={tareas} onDelete={borrarTarea} onToggle={toggleTarea}/>
       : 'No hay tareas para mostrar'}
    </div>
  )
}

export default App
