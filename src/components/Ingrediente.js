import React from "react";
import "../css/Ingrediente.css";
//componente funcional
//estructura del componente funcional
// cuando se escribe en llaves lo de adentro se considera un valor de javascript
//props son propiedades javascript que se usa para reutilizar
function Ingrediente(props) {
    return (
        //en react cuando usas una etiqueta de html la clase se escribe "className"
        //requiere es necesario para insertar una imagen, tambien se podria hacer un import para usar la imagen
        <div className="contenedor-ingrediente">
            <img className="imagen-ingrediente" src={require(`../img/${props.imagen}`)} alt={`Foto de ${props.nombre}`} />
            <div className="contenedor-texto-ingrediente">
                <p className="nombre-ingrediente">{props.nombre}</p>
                <p className="tipo-ingrediente">{props.tipo}</p>
                <p className="cantidad-ingrediente">{props.cantidad}</p>
                
            </div>
        </div>

    );
}

//es necesario exportar el componenente
export default Ingrediente;