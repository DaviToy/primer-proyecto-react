// Uso de props
import React from "react";

export default function Saludar(props) {
    // Asignacion por destructuring
    const { userInfo, saludarFn } = props
    const { nombre = "Anonimo" } = userInfo
    //
    console.log(props)

    console.log(userInfo)

    return(
        <div>
           <button onClick={() => saludarFn(nombre)}>
            Saludar
            </button>
        </div>
    )
}