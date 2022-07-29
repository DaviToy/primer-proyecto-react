// TODOS LOS COMPONENTES EN REACT INICIAN CON MAYUSCULA
import React from 'react'
// La funcion del componente inicia con mayuscula
export default function HolaMundo() {
    const mifuncion = () => {
        console.log("Mi funcion")
    }
    return(
        <div>
            <h1>Hola Mundo</h1>
            <h2>David Serrano</h2>
        </div>
    )
}