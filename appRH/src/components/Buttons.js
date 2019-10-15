import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Buttons(props) {
    return (
        <View style={styles.containerInput}>
            <Icon name={props.name} size={props.size} color="#fff" style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({

    containerInput: {
        flexDirection: 'column',
    },

    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Buttons;