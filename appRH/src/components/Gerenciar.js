import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Buttons from '../components/Buttons';

function Gerenciar({ navigation }) {
    return (
        <View style={styles.containerScreen}>
                <View style={{height: 10}}/>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.btnAdd} onPress={() => { navigation.push('Cadastrar') }}>
                        <Buttons
                            name="user-plus"
                            size={60}
                        />
                        <Text style={styles.fontButton}>
                            Adicionar
                        </Text>
                    </TouchableOpacity>
                </View>            

                <View style={styles.container}>
                    <TouchableOpacity style={styles.btnList} onPress={() => { navigation.push('Listar') }}>
                        <Buttons
                            name="list-alt"
                            size={60}
                        />
                        <Text style={styles.fontButton}>
                            Listar
                            </Text>
                    </TouchableOpacity>
                </View>

            

        </View>
    );
}


const styles = StyleSheet.create({

    containerScreen: {
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },

    container: {
        flex: 1,
        borderColor: 'transparent',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnAdd: {
        flex: 1,
        height: 200,
        width: 350,
        backgroundColor: "#FF3D00",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        color: "white",
    },

    btnList: {
        flex: 1,
        height: 200,
        width: 350,
        margin: 10,
        backgroundColor: "#FFD600",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        color: "white",
    },

    fontButton: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: "Times New Roman",
    }

});

export default Gerenciar;