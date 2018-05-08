import React,{Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Principal from "./Principal";

export default class Layout extends Component{

    render(){
        const titulo = "Lista para hacer";
        return (
            <div>
                <Header titulo = {titulo} />
                <Principal />
                <Footer />
            </div>

        );
    }
}
