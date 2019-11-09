import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, Picker, Text, StyleSheet } from "react-native";
import api from '../services/api';
import Card from './Card';

function List() {

    const [funcionarios, setFuncionarios] = useState([]);
    const [options, setOptions] = useState({
        sexo: '',
        cargo: ''
    });

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const resp = await api.get('funcionarios');
                const data = await resp.data;
                setFuncionarios(data);
            } catch (error) {
                console.log(error, "erro");
            }
        }
        fetchApi();
    }, [funcionarios]);

    return (

        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <Picker
                selectedValue={options.sexo}
                style={styles.optionsStyle}
                onValueChange={(itemValue, itemIndex) =>
                    setOptions({ ...options, sexo: itemValue })
                }>
                <Picker.Item label="Masculino" value="masculino" />
                <Picker.Item label="Feminino" value="feminino" />
            </Picker>
            
            <Picker
                selectedValue={options.cargo}
                style={styles.optionsStyle}
                onValueChange={(itemValue, itemIndex) =>
                    setOptions({ ...options, cargo: itemValue })
                }>
                {funcionarios.map(item =>(
                    <Picker.Item key={item._id} label={item.cargo} value={item.cargo} />
                ))}    
            </Picker>

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
        width: 300,
        height: 50
    }
})

export default List;