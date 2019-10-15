import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import checklist from '../assets/logo.png'

class Apresentation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.container}>
        <Image source={checklist}/>
        <View> 
          <TouchableOpacity style={style.btncontainer} onPress={() => {this.props.navigation.push('Detalhes')}}>
            <Text style={style.btntext}>Tap to continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
