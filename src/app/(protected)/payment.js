import { router } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Payment() {
    const [valor, setValor] = useState("0,00");
    const [sugestoes, setSugestoes] = useState([{
        "id": 1,
        "nome": "Caterina Wakeham"
      }, {
        "id": 2,
        "nome": "Hamlin Clemmens"
      }, {
        "id": 3,
        "nome": "Marylee Jessel"
      }, {
        "id": 4,
        "nome": "Clerkclaude Baylie"
      }, {
        "id": 5,
        "nome": "Nappy Gadault"
      }, {
        "id": 6,
        "nome": "Maryann Tankin"
      }, {
        "id": 7,
        "nome": "Ward Clyburn"
      }, {
        "id": 8,
        "nome": "Ham Cortes"
      }, {
        "id": 9,
        "nome": "Magdalene Spellsworth"
      }, {
        "id": 10,
        "nome": "Nani Crawford"
      }, {
        "id": 11,
        "nome": "Eduardo Antonio"
      }, {
        "id": 12,
        "nome": "Agata Mibourne"
      }, {
        "id": 13,
        "nome": "Yard Furneaux"
      }, {
        "id": 14,
        "nome": "Merridie Cuolahan"
      }, {
        "id": 15,
        "nome": "Cody Steuhlmeyer"
      }, {
        "id": 16,
        "nome": "Ulrich Hanmer"
      }, {
        "id": 17,
        "nome": "Davon Ivachyov"
      }, {
        "id": 18,
        "nome": "Binky Peat"
      }, {
        "id": 19,
        "nome": "Berni Paulou"
      }, {
        "id": 20,
        "nome": "Rab Jedrzejkiewicz"
      }, {
        "id": 21,
        "nome": "Lloyd Kremer"
      }, {
        "id": 22,
        "nome": "Cammy Brave"
      }, {
        "id": 23,
        "nome": "Mariska Blincoe"
      }, {
        "id": 24,
        "nome": "Isabelle Strettell"
      }, {
        "id": 25,
        "nome": "Garreth O'Nion"
      }, {
        "id": 26,
        "nome": "Ebba St. Quentin"
      }, {
        "id": 27,
        "nome": "Jacquelin Curr"
      }, {
        "id": 28,
        "nome": "Meier Roskruge"
      }, {
        "id": 29,
        "nome": "Dominique Carratt"
      }, {
        "id": 30,
        "nome": "Aindrea Devoy"
      }, {
        "id": 31,
        "nome": "Vanda Eschalotte"
      }, {
        "id": 32,
        "nome": "Harwell Moralis"
      }, {
        "id": 33,
        "nome": "Drew Filyukov"
      }, {
        "id": 34,
        "nome": "Jefferey MacVean"
      }, {
        "id": 35,
        "nome": "Maggie Meers"
      }]);
      const [id, setId] = useState(1);
      const [data, setData] = useState(new Date());

    return (
        <View  style={styles.content}>
            <View style={styles.inputView}>
                <Ionicons name="wallet-outline" size={24} color="black" />
                <TextInput placeholder="Valor" keyboardType="decimal-pad" style={styles.inputValor} value={valor} onChangeText={setValor} />
            </View>

            <View style={styles.inputView}>
             <Picker selectedValue={id} onValueChange={(itemValue, index)=>{setId(itemValue);

             }}
             style={{width:"100%"}}>
               
               {sugestoes?.map((item) => {
                    return <Picker.Item key={item.id} label={item.nome} value={item.id} />
                  })}
                
             </Picker>
            </View>
            <View style={styles.inputView}>
               <DateTimePicker value={data} mode="date" onChange={(event, selectData)=>setData(selectData)} />
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