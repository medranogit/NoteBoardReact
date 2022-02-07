import React, { Component } from "react"; //Chamando o react e seus componentes
import './style.css' //Importando css

export default class FormularioCadastroClass extends Component {
    render() {
        return (
            <form>
                <input type='text' placeholder="Titulo" />
                <textarea placeholder="Coloque a mensagem aqui" />
                <button>Criar nota</button>
            </form>
        )
    }
}