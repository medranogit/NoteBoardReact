import React, {Component} from "react";


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