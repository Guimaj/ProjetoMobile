import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Picker,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import api from '../services/api';

import Input from '../components/Input';

function Cadastro() {

    const [funcionario, setFuncionario] = useState({
        nome: '',
        cargo: '',
        salario: 0,
        carteirinha: 0,
        sexo: ''
    });

    async function postFuncionario() {
        try {
            const myFunc = await api.post('/funcionarios', funcionario);
            console.log(myFunc.data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <KeyboardAvoidingView style={styles.container} enabled={Platform.OS == 'ios'} behavior='padding'>
            <View style={styles.form}>
                <Input value={funcionario.nome} onChangeText={nome => setFuncionario({ ...funcionario, nome })} placeholder="Nome" name="user" size={18} keyboardType="default" />
                <Input value={funcionario.cargo} onChangeText={cargo => setFuncionario({ ...funcionario, cargo })} placeholder="Cargo" name="briefcase" size={18} keyboardType="default" />
                <Input value={funcionario.salario} onChangeText={salario => setFuncionario({ ...funcionario, salario })} placeholder="Salário" name="money" size={18} keyboardType="numeric" />
                <Input value={funcionario.carteirinha} onChangeText={carteirinha => setFuncionario({ ...funcionario, carteirinha })} placeholder="Carteirinha" name="address-card" size={18} keyboardType="numeric" />
                <Picker
                    selectedValue={funcionario.sexo}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(itemValue, itemIndex) =>
                        setFuncionario({...funcionario,sexo:itemValue})
                    }>
                    <Picker.Item label="Masculino" value="masculino" />
                    <Picker.Item label="Feminino" value="feminino" />
                </Picker>
                <TouchableOpacity style={styles.btn} onPress={postFuncionario}>
                    <Text style={styles.btn_text}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    form: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'column',
        paddingHorizontal: 30,
    },

    btn: {
        backgroundColor: '#FE8271',
        alignSelf: 'stretch',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingVertical: 5
    },

    btn_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }

})
export default Cadastro;