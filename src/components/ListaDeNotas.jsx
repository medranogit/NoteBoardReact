import React, { Component } from "react";
import CardNotaClass from "./CardNota";

{
    var coisas = ['Trabalho', 'Trabalho', 'Estudo', 'Hoby', 'Charmander']
    
    // coisas.push('lala')
}

export default class ListaDeNotasClass extends Component {
    render() {
        return (
            <ul>
                {coisas.map(categorias => {
                    return (
                        <li>
                            <div>{categorias}</div>
                            <CardNotaClass />
                        </li>
                    )
                })}


            </ul>
        );
    }
}