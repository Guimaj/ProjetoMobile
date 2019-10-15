import React, {useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image, 
    KeyboardAvoidingView, 
    Platform
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import Input from '../components/Input';
import logo from '../assets/logo.png'


function Cadastro(){

    const [sexos, setSexos] = useState([{value:'Masculino'},{value:'Feminino'}]);
    return(
        <KeyboardAvoidingView style={styles.container} enabled={Platform.OS == 'ios'} behavior='padding'>
            <Image source={logo}/>
            <View style={styles.form}>
                <Input 
                placeholder="Nome" 
                name="user"
                size={20}
                />
                <Input 
                placeholder="Salário"
                name="money"
                keyboardType="numeric"
                size={18}
                />
                <Input 
                placeholder="Carteirinha"
                name="address-card"
                keyboardType="numeric"
                size={18}
                />
                <Input 
                placeholder="Cargo"
                name="briefcase"
                keyboardType="default"
                size={18}
                />

                <Dropdown data={sexos} labelFontSize={15} value={sexos[0].value}/>
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
<<<<<<< HEAD
    },

    form: {
        justifyContent:'center',
        alignSelf:'stretch',
        flexDirection:'column',
        paddingHorizontal:30,
        
=======
        backgroundColor: '#fff',
    },

    form: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'column',
        paddingHorizontal: 35,
>>>>>>> telaInicial
    },

    btn: {
        backgroundColor:'#FE8271',
        alignSelf: 'stretch',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
<<<<<<< HEAD
        marginTop: 10,
        paddingVertical:5
=======
        marginTop: 5,
        paddingVertical: 5,
>>>>>>> telaInicial
    },

    btn_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    }
    
})
export default Cadastro;