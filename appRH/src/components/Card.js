import React from 'react';
import { View, StyleSheet, Image, Text,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import team from '../assets/team.png';
import api from '../services/api';


export default function Card(props) {

    return (
        <View style={styles.containerFuncionario}>
            <Image source={team} style={styles.image} />
            <View style={styles.propsFuncionario}>
                <Text style={styles.textFuncionario}>{`Nome: ${props.nome}`}</Text>
                <Text style={styles.textFuncionario}>{`Cargo: ${props.cargo}`}</Text>
                <Text style={styles.textFuncionario}>{`Sexo: ${props.sexo}`}</Text>
                <Text style={styles.textFuncionario}>{`Salário: ${props.salario}`}</Text>
                <Text style={styles.textFuncionario}>{`Carteirinha: ${props.carteirinha}`}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={()=>api.delete(`/funcionarios/${props.carteirinha}`)}>
                    <Icons name='trash' size={20} color='black'/>
                </TouchableOpacity>
                <TouchableOpacity>   
                    <Icons name='edit' size={16} color='black'/>
                </TouchableOpacity>
            </View>             
        </View>
    );
}

const styles = StyleSheet.create({
    containerFuncionario: {
        borderRadius: 20,
        borderBottomWidth: 5,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderRightColor: 1,
        borderRightColor: 1,
        margin: 4,
        height: 120,
        backgroundColor: '#6ce6ad',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderTopColor:"grey",
        borderBottomColor: "grey",
        borderLeftColor: "grey",
        alignItems: "center",
    },
    image: {
        borderRadius: 25,
        marginLeft: 15,
        alignSelf:'center',
    },
    textFuncionario: {
        fontSize: 14,
        color: '#403e37',
        fontWeight: 'bold'
    },
    propsFuncionario: {
        marginLeft: 15,
    },
    buttons:{
        flex:1,
        justifyContent:'space-between',
        alignItems: 'flex-end',
        marginRight:10       
    }
});
