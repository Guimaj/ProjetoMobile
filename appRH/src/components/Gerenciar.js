import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Buttons from '../components/Buttons';
import checklist64 from '../assets/checklist64.png';

function Gerenciar({navigation}) {
    return (
        <View style={styles.containerScreen}>
            <View>

                <View style={styles.space}></View>

                <View style={styles.containerRight}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.btnAdd} onPress={() => {navigation.push('Cadastrar')}}>
                            <Buttons
                                name="user-plus"
                                size={40}
                            />
                            <Text style={styles.fontButton}>
                                Adicionar
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.btnDelet}>
                            <Buttons
                                name="trash-o"
                                size={40}
                            />
                            <Text style={styles.fontButton}>
                                Deletar
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            <View style={styles.containerRight}>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.btnUpdate}>
                        <Buttons
                            name="edit"
                            size={40}
                        />
                        <Text style={styles.fontButton}>
                            Atualizar
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.btnList}>
                        <Buttons
                            name="list-alt"
                            size={40}
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
        backgroundColor: "black",
        flex: 1,
        alignItems: 'center',
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

    space: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },

    containerRight: {
        flexDirection: 'row',
    },

    container: {
        height: 200,
        width: 180,
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
        width: 160,
        backgroundColor: "#7B1FA2",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        color: "white",
    },

    btnDelet: {
        flex: 1,
        height: 200,
        width: 160,
        backgroundColor: "#D50000",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        color: "white",
    },

    btnUpdate: {
        flex: 1,
        height: 200,
        width: 160,
        backgroundColor: "#FF3D00",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        color: "white",
    },

    btnList: {
        flex: 1,
        height: 200,
        width: 160,
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