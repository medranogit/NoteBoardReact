import ListaDeNotasClass from './components/ListaDeNotas'
import FormularioCadastroClass from './components/FormularioCadastro';
import { Component } from 'react/cjs/react.production.min';


 
export default class App extends Component{
  render() {
    return (
      <div>
        <FormularioCadastroClass />
        <ListaDeNotasClass />
      </div>
    );
  }

}
