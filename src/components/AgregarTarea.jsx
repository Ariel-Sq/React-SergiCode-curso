import { useState } from "react"

export const AgregarTarea = () => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <input
        type="text"
        placeholder="Ingresa tarea nueva"
        value={inputValue}
        onChange={onInputChange}
    />
  )
}
