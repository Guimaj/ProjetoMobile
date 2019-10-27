import React, { useState } from 'react';
import { View, StyleSheet, Image, Text,TouchableOpacity} from 'react-native';
import menUser from '../assets/menUser.png';
import Icons from 'react-native-vector-icons/FontAwesome';
import team from '../assets/team.png';


export default function Card(props) {

    const [funcionario, setFuncionario] = useState({})

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
                <TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderTopWidth: 1,
        marginTop:15,
        borderTopColor:"#666"
    },
    image: {
        borderRadius: 25,
        backgroundColor: "transparent",
        alignSelf:'center',
    },
    textFuncionario: {
        fontSize: 16,
        color: '#000',
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