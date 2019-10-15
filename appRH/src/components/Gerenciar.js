import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Buttons from '../components/Buttons';
import { whileStatement } from '@babel/types';
import checklist24 from '../assets/checklist24.png';
import checklist64 from '../assets/checklist64.png';

class Gerenciar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{backgroundColor: "black", flex:1}}>

                <View>

                    <View style={style.topbar}>
                        <Image source={checklist64} style={style.imgTop} />
                        <Text style={style.TextTopBar}>APP RH</Text>
                    </View>

                    <View style={style.space}></View>

                    <View style={style.containerRight}>
                        <View style={style.container}>
                            <TouchableOpacity style={style.btnAdd}>
                                <Buttons
                                    name="user-plus"
                                    size={40}
                                />
                                <Text style={style.fontButton}>
                                    Adiconar
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.container}>
                            <TouchableOpacity style={style.btnDelet}>
                                <Buttons
                                    name="trash-o"
                                    size={40}
                                />
                                <Text style={style.fontButton}>
                                    Deletar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={style.containerRight}>

                    <View style={style.container}>
                        <TouchableOpacity style={style.btnUpdate}>
                            <Buttons
                                name="edit"
                                size={40}
                            />
                            <Text style={style.fontButton}>
                                Atualizar
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.container}>
                        <TouchableOpacity style={style.btnList}>
                            <Buttons
                                name="list-alt"
                                size={40}
                            />
                            <Text style={style.fontButton}>
                                Listar
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({

    topbar: {
        height: 65,
        fontSize: 15,
        padding: 15,
        backgroundColor: '#6ce6ad',
        flexDirection: 'row',
        alignItems: 'center',
    },

    TextTopBar: {
        fontSize: 30,
        color: "white",
        fontWeight:'bold',
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

    fontButton:{
        color: "white",
        fontSize: 15,
        fontWeight:'bold',
        fontFamily: "Times New Roman",
    }

});

export default Gerenciar;