import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Input(props){
    return(
        <View style={styles.containerInput}>
           <Icon name={props.name} size={props.size} color="#000" style={styles.icon}/>
           <TextInput 
            placeholder={props.placeholder} 
            style={styles.input} 
            placeholderTextColor='#666'
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
            /> 
        </View>
    );
}

const styles = StyleSheet.create({

    containerInput:{
        flexDirection:'column',
    },  

    input: {
        fontSize:16,
        borderRadius: 30,
        paddingHorizontal: 50,
        backgroundColor:'rgba(255, 255, 255, 0.4)',
        height: 40,
        borderWidth:1
    },

    icon:{
        alignSelf:'flex-start',
        top: 30,
        left: 15
    }
});

export default Input;