import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import api from '../services/api';
import Card from './Card';

function List() {

    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const resp = await api.get('funcionarios');
                const data = await resp.data;
                setFuncionarios(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchApi();
    }, [funcionarios]);

    return (
        <SafeAreaView style={{backgroundColor: 'black'}}>
            <FlatList
                data={funcionarios}
                renderItem={({ item }) => <Card key={item._id} nome={item.nome} sexo={item.sexo} cargo={item.cargo} salario={item.salario["$numberDecimal"]} carteirinha={item.carteirinha}/>}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
    );

}


export default List;