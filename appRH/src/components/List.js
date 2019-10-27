import React,{Component} from "react";
import {SafeAreaView,StyleSheet, Text, View, FlatList} from "react-native";
import api from '../services/api';
import Card from './Card';

class List extends Component {
    state = {
        funcionarios:[]
    }

     componentDidMount(){
        const fetchApi = async () =>{
            try{
                const resp = await api.get('funcionarios');
                const data = await resp.data;
                this.setState({funcionarios:data});
                console.log(this.state.funcionarios);
            }catch(error){
                console.log(error);
            }
        }
        fetchApi();
    }

    render(){
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.funcionarios}
                    renderItem={({item})=> <Card key={item._id} nome={item.nome} sexo={item.sexo} cargo={item.cargo} salario={item.salario["$numberDecimal"]} carteirinha={item.carteirinha}/>}
                    keyExtractor={item => item._id} 
                />
            </SafeAreaView>
        );
    }   
}


export default List;