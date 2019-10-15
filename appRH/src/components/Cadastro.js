import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform} from 'react-native';
import Input from '../components/Input';
import logo from '../assets/logo.png'


function Cadastro(){
    return(
        <KeyboardAvoidingView style={styles.container} enabled={Platform.OS == 'ios'} behavior='padding'>
            <Image source={logo}/>
            <View style={styles.form}>
                <Input 
                placeholder="Nome" 
                name="user"
                size={22}
                />
                <Input 
                placeholder="Salário"
                name="money"
                keyboardType="numeric"
                size={20}
                />
                <Input 
                placeholder="Carteirinha"
                name="address-card"
                keyboardType="numeric"
                size={20}
                />
                <TouchableOpacity style={styles.btn}>
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
        backgroundColor: '#fff',
    },

    form: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'column',
        paddingHorizontal: 35,
    },

    btn: {
        backgroundColor:'#FE8271',
        alignSelf: 'stretch',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        paddingVertical: 5,
    },

    btn_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    }
    
})
export default Cadastro;