import { useState } from "react"

const Item = ({nombre, visto }) => {
    return(
        <li className="color">{nombre}
        {visto ? '✅' : '❌'}
        </li>
    )
}

export const ListadoApp = () => {

    const addTask = () => {
        setArreglo([...arreglo, { nombre: 'Nuevo', visto: false}])
    }

    let listadoSecciones = [
        {nombre:"necesarias", visto: true},
        {nombre:"Uso de Vite", visto: true},
        {nombre:"Componentes", visto: true},
        {nombre:"Variables en JSX", visto: true},
        {nombre:"Props", visto: true},
        {nombre:"Eventos", visto: true},
        {nombre:"useState", visto: true},
        {nombre:"Redux", visto: false},
        {nombre:"customHooks", visto: false},
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)
    return (
        <>
        <h1>Listado de temas del curso</h1>
        <ol>
            {arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto}></Item>)}
        </ol>

        <button onClick={() => addTask()}>Agregar tarea</button>
        </>
    )
}