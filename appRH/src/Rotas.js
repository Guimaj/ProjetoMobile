import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Apresentation from './components/Apresentation';
import Gerenciar from './components/Gerenciar';
import Cadastro from './components/Cadastro';
import List from './components/List';

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
                headerStyle:{
                    headerTransparent:true
                },
                headerTitle:'Gerenciar'
            }
        },

        Cadastrar: {
            screen: Cadastro,
            navigationOptions: {
                headerTitle:'Cadastro de Funcionário'
            }
        },

        Listar: {
            screen: List,
            navigationOptions: {
                headerStyle:{
                    //backgroundColor: '#6ce6ad',
                },
                headerTitle: 'Lista de Funcionários'
            }
        }
    })
);

export default Rotas;