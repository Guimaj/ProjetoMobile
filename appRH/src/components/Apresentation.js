import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import checklist from '../assets/logo.png'
import api from '../services/api';

function Apresentation({navigation}) {

    return (
      <View style={style.container}>
        <Image source={checklist}/>
        <View> 
          <TouchableOpacity style={style.btncontainer} onPress={() => {navigation.navigate('Gerenciar')}}>
            <Text style={style.btntext}>Tap to continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

}

const style = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#6ce6ad' ,
      alignItems: 'center',
      justifyContent: 'center'
  },
  btn:{
      justifyContent:'center',
      alignItems: 'center',
  },
  btntext:{
      fontWeight:'bold',
      color:'#fff',
      fontSize: 18,
  },
  btncontainer:{
      marginTop:20,
      justifyContent:'center'
  }
});

export default Apresentation;
