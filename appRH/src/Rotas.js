import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Apresentation from './components/Apresentation';
import Gerenciar from './components/Gerenciar';
import Cadastro from './components/Cadastro';

//rotas da aplicação

const Rotas = createAppContainer(
   
    createStackNavigator({
        Home: {
            screen: Apresentation,
            navigationOptions: {
                headerTransparent: true
            }
        },

        Gerenciar: {
            screen: Gerenciar,
            navigationOptions: {
                headerTitle:'App RH'
            }
        },

        Cadastrar: {
            screen: Cadastro,
            navigationOptions: {
                headerTitle:'Cadastro'
            }
        }
    })
);

export default Rotas;