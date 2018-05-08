import React,{Component} from "react";
import Tarea from "./Tarea";

export default class ParaHacer extends Component {
    render(){
        const {paraHacer} = this.props;

        return(
            <ul>
                <h1>Tareas</h1>
                {paraHacer.map(tarea =>
                   <Tarea
                       key={tarea.id}
                       tarea={tarea}
                       removeTarea = {this.props.removeTarea}
                   />
                )}
            </ul>


        );
    }
}