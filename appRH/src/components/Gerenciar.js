import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Buttons from '../components/Buttons';
import checklist64 from '../assets/checklist64.png';

function Gerenciar({ navigation }) {
    return (
        <View style={styles.containerScreen}>

            

            <View style={styles.containerRight}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.btnAdd} onPress={() => { navigation.push('Cadastrar') }}>
                        <Buttons
                            name="user-plus"
                            size={70}
                        />
                        <Text style={styles.fontButton}>
                            Adicionar
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.containerRight}>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.btnList} onPress={() => { navigation.push('Listar') }}>
                        <Buttons
                            name="list-alt"
                            size={70}
                        />
                        <Text style={styles.fontButton}>
                            Listar
                            </Text>
                    </TouchableOpacity>
                </View>

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

    TextTopBar: {
        fontSize: 30,
        color: "white",
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    imgTop: {
        top: 0,
    },


    containerRight: {
        flexDirection: 'row',
    },

    container: {
        flex: 1,
        height: 230,
        width: 400,
        borderWidth: 10,
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
        borderRadius: 5,
        color: "white",
    },

    btnList: {
        flex: 1,
        height: 200,
        width: 350,
        backgroundColor: "#FFD600",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        color: "white",
    },

    fontButton: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: "Times New Roman",
    }

});

export default Gerenciar;