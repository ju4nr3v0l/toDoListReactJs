import React,{Component} from "react";

const Tarea = ({ tarea, removeTarea, ...props }) => {
    return(
        <li onClick={() => removeTarea(tarea.id)}>{tarea.nombre}</li>
    );
}

export default Tarea;