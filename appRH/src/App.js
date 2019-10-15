import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Apresentation from './components/Apresentation';
//import from './rotas/Apresentation';
import Gerenciar from './components/Gerenciar';

let navegador = createStackNavigator(
  {
    Home: { screen: Apresentation },
    Detalhes: { screen: Gerenciar },
  },
  {
    headerMode: "none"
  }
);

let App = createAppContainer(navegador);

export default App;
