// Uso de props
import React from "react";

export default function Saludar(props) {
    console.log(props.userInfo.nombre)
    console.log(props.userInfo.age)
    console.log(props.userInfo.color)
    return(
        <div>
            <p>Hola {props.userInfo.nombre}, 
            tiene {props.userInfo.age} anos,
            su color favorito es el {props.userInfo.color}
            </p>
        </div>
    )
}