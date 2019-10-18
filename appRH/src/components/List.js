import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, Input, Image } from "react-native";
import menUser from '../assets/menUser.png';
import team from '../assets/team.png';

class List extends React.Component {
    state = {
        data: [
            { id: "00", name: "Relâmpago McQueen", sexo: "M" },
            { id: "01", name: "Agente Tom Mate", sexo: "M" },
            { id: "02", name: "Doc Hudson", sexo: "M" },
            { id: "03", name: "Cruz Ramirez", sexo: "M" },
            { id: "04", name: "kelvin Lins", sexo: "M" },
            { id: "05", name: "Fernando Zandonadi", sexo: "M" },
            { id: "06", name: "Camila Aparecida", sexo: "F" },
            { id: "07", name: "Fabio Bernardes", sexo: "M" },
            { id: "09", name: "Adriana", sexo: "F" },
            { id: "10", name: "Helio Gomes", sexo: "M" },
            { id: "11", name: "Tiago catchorro", sexo: "M" },
            { id: "12", name: "Thiago soa", sexo: "M" },
            { id: "13", name: "Kleiton", sexo: "M" },
        ]
    };
    render() {
        return (
            <View>
                <SafeAreaView style={{ backgroundColor: 'white' }}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.item}>
                                    <Image source={team} style={styles.imageCard} />
                                    <View style={{flexDirection: 'column'}}>
                                        <Text style={styles.text}>Nome: {item.name}</Text>
                                        <Text style={styles.text}>Sexo: {item.sexo}</Text>
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
        fontSize: 15,
        marginLeft: 25,
        fontWeight: 'bold',
        color: "white",
        alignItems: 'center',
        padding: 3,
        //textDecorationLine: "underline",
        //textDecorationStyle: "solid",
        //textDecorationColor: "white"
    }
});

export default List;