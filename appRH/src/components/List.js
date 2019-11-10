import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, Picker, View, StyleSheet } from "react-native";
import api from '../services/api';
import Card from './Card';
import Icons from 'react-native-vector-icons/FontAwesome';


function List() {

    const [funcionarios, setFuncionarios] = useState([]);
    const [option, setOption] = useState({
        sexo: '',
    });

    useEffect(() => {
        const fetchApi = async () => {

            try {
                let resp;
                let data;           
                
                if(option.sexo != ''){
                    resp = await api.get(`/funcionarios/sexos/${option.sexo}`);
                    data = await resp.data;
                }
                else{
                    resp = await api.get('/funcionarios');
                    data = await resp.data;
                }
                
                setFuncionarios(data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchApi();
    }, [funcionarios]);


    return (

        <SafeAreaView style={{ backgroundColor: 'white'}}>
            <View style={styles.containerPicker}>
                <Icons name='venus-mars' size={20} color='black'/>
                <Picker
                    selectedValue={option.sexo}
                    style={styles.optionsStyle}
                    value='Todos'
                    onValueChange={(itemValue, itemIndex) =>
                        setOption({ ...option, sexo: itemValue })
                    }>
                    <Picker.Item label={'Masculino'} value={'masculino'} />
                    <Picker.Item label={'Feminino'} value={'feminino'} />
                    <Picker.Item label={'Todos'} value={''} />
                </Picker>               
            </View>
            <FlatList
                data={funcionarios}
                renderItem={({ item }) => <Card key={item._id} nome={item.nome} sexo={item.sexo} cargo={item.cargo} salario={item.salario["$numberDecimal"]} carteirinha={item.carteirinha} />}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    optionsStyle: {
        height: 60,
        flex:1,
        alignSelf:'stretch'
    },
    containerPicker:{
        marginLeft:15,
        flexDirection:'row',
        alignItems:'center'
    }
})

export default List;