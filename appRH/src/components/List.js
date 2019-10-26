import React,{useEffect,useState} from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Dropdown } from "react-native";
import Buttons from '../components/Buttons';
import team from '../assets/team.png';
import api from '../services/api';

function List() {
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        busca();
    }, [])

    async function busca() {
       try{
            const funcionario = await api.get('/funcionarios');    
            const value = await funcionario.data;
            const arrayFunc = Object.keys(value).map(key=> {[key]:value[key]});
            setFuncionarios(funcionario.data);
            console.log(value);
            console.log(funcionario.data);
            console.log(arrayFunc);
       }catch(error){
            console.log(error);
       }
        
    }

    return (
        <View>
            <View>
                <Text style={{fontSize:50}}></Text>
            </View>
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                
            </SafeAreaView>
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        flexGrow: 1,
        margin: 5,
        padding: 20,
        borderRadius: 20,
        shadowColor: 1,
        height: 150,
        flexDirection: 'row',
        backgroundColor: "#212F3C",
    },

    imageCard: {
        borderRadius: 25,
        backgroundColor: "transparent",
        alignSelf: 'center'
    },

    text: {
        //padding: 1,
        fontSize: 12,
        marginLeft: 25,
        width: 180,
        flexDirection: 'column',
        fontWeight: 'bold',
        color: "white",
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: 'transparent',
    },

    buttonDelete: {
        height: 30,
        width: 30,
        borderRadius: 5,
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: 25,
        paddingLeft: 10,
        //backgroundColor: 'red',
    }
});

export default List;