import React,{Component} from "react";
import TextBox from "./TextBox";
import ParaHacer from "./ParaHacer";


export default class Principal extends Component {
    constructor(props){
        super(props);
        this.state = {
            paraHacer:[],
        };
    }

    addTarea(tarea){
        this.setState(({paraHacer}) => ({
            paraHacer: [
                ...paraHacer,
                tarea,
            ]
        }));
    };

    removeTarea(tareaId){
        const  newParaHacer = this.state.paraHacer.filter(tarea => {
            return tareaId !== tarea.id;
        });
        this.setState({paraHacer:newParaHacer});
    };

    render() {
        // setTimeout(() => {
        //     this.state.paraHacer.push({nombre:'Estudiar ReactJs', id:1});
        //     this.setState({paraHacer:this.state.paraHacer})
        // }, 2000);
        return (
            <div>
                <TextBox addTarea = {this.addTarea.bind(this)}/>
                <ParaHacer paraHacer = {this.state.paraHacer}
                removeTarea={this.removeTarea.bind(this)}/>

            </div>
        );
    }
}