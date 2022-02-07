import React, { Component } from "react"; //Chamando o react e seus componentes
import CardNotaClass from "../CardNota/CardNota";
import './style.css' //Importando css

{
    var coisas = ['Trabalho', 'Trabalho', 'Estudo', 'Hoby', 'Charmander']
    
    // coisas.push('lala')
}

export default class ListaDeNotasClass extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {/* Index é uma prop que funciona como contador */}
                {coisas.map((categorias, index) => {
                    return (
                        <li className="lista-notas_item"  id={index} key={index} >
                            
                            {/* <div>{categorias}</div> */}
                            <CardNotaClass cat = {categorias} />
                            {/* {console.log(index)} */}

                        </li>   
                        
                    )
                })}
            </ul>
        );
    }
}