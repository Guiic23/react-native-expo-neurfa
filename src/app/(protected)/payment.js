import { router } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';

export default function Payment() {
    const [valor, setValor] = useState("0,00");
    const [sugestoes, setSugestoes] = useState([]);

    return (
        <View  style={styles.content}>
            <View style={styles.inputView}>
                <Ionicons name="wallet-outline" size={24} color="black" />
                <TextInput placeholder="Valor" keyboardType="decimal-pad" style={styles.inputValor} value={valor} onChangeText={setValor} />
            </View>

            <View style={styles.inputView}>
              <TextInput placeholder="Usuário" />
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder="Data" />
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder="Observações" />
            </View>


            <View  style={styles.contentButtons}>
                <Button  title="Salvar" />
                <Button title="Continuar" />
                <Button title="Cancelar" onPress={() => router.back()}  />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    inputView:{
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
       
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row',
      

    },
    contentButtons:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap:10,
        width: '100%', 
        marginTop: 20, 


    },
    inputValor:{
        flex:1,
       textAlign: 'right',
       padding: 10,
    },
});