import { useState, useEffect } from "react"
import { UserList } from "./UserList"

export const UserApp = () => {

    const [endPoint, setendPoint] = useState('users')

    const handleFetch = () => {
        setendPoint('comments')
    }

  return (
    <>
        <h1>Lista de usuarios:</h1>
        <UserList endPoint={endPoint}></UserList>
        <button onClick={handleFetch}>Aquí se llama a la API</button>
    </>
  )
}
