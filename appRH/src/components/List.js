import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Dropdown} from "react-native";
import { Dropdown } from 'react-native-material-dropdown';
import Buttons from '../components/Buttons';
import team from '../assets/team.png';

class List extends React.Component {
    state = {
        data: [
            { id: "00", name: "Relâmpago McQueen o brabo dos barbos", sexo: "M", cargo: "Pedreiro"},
            { id: "01", name: "Agente Tom Mate", sexo: "M", cargo: "Pedreiro" },
            { id: "02", name: "Doc Hudson", sexo: "M", cargo: "Pedreiro" },
            { id: "03", name: "Cruz Ramirez", sexo: "M", cargo: "Pedreiro" },
            { id: "04", name: "kelvin Lins", sexo: "M", cargo: "Pedreiro" },
            { id: "05", name: "Fernando Zandonadi", sexo: "M", cargo: "Pedreiro" },
            { id: "06", name: "Camila Aparecida", sexo: "F", cargo: "Pedreiro" },
            { id: "07", name: "Fabio Bernardes", sexo: "M", cargo: "Pedreiro" },
            { id: "09", name: "Adriana", sexo: "F", cargo: "Pedreiro" },
            { id: "10", name: "Helio Gomes", sexo: "M", cargo: "Pedreiro" },
            { id: "11", name: "Tiago catchorro", sexo: "M", cargo: "Pedreiro" },
            { id: "12", name: "Thiago soa", sexo: "M", cargo: "Pedreiro" },
            { id: "13", name: "Kleiton", sexo: "M", cargo: "Pedreiro" },
        ],
        sexos: [
            "Masculino",
            "Feminino"
        ]
    };
    render() {
        return (
            <View>
                <View>
                    <Dropdown datas={this.sexos} labelFontSize={15} value={this.sexos}></Dropdown>
                </View>
                <SafeAreaView style={{ backgroundColor: 'white' }}>    
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.item}>
                                    <Image source={team} style={styles.imageCard} />
                                    <View style={styles.text}>
                                        <Text style={styles.text}>Nome: {item.name}</Text>
                                        <Text style={styles.text}>Sexo: {item.sexo}</Text>
                                        <Text style={styles.text}>Id: {item.id}</Text>
                                        <Text style={styles.text}>cargo: {item.cargo}</Text>
                                    </View>
                                    <View style={{Left: 5}}>
                                        <TouchableOpacity style={styles.buttonDelete}>
                                            <Buttons
                                                name="trash"
                                                size={20}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.buttonDelete}>
                                            <Buttons
                                                name="edit"
                                                size={20}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        }}
                    />
                </SafeAreaView>
            </View>
        );
    }
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