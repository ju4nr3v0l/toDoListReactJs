import React,{Component} from "react";

const ENTER_KEY_CODE = 13;
let ID = 1;

export default class TextBox extends Component {
    handleKeyDown(e){
        if(e.keyCode === ENTER_KEY_CODE){
            this.props.addTarea({
                nombre:this.refs.text.value,
                id:ID,
            });
            ID++;
            this.refs.text.value = '';
        }
    }
    render() {
        return (
            <input ref="text" type="text" placeholder="Ingresa tu tarea" onKeyDown={this.handleKeyDown.bind(this)}/>
        );
    }
}