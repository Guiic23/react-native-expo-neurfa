import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";

export default function List() {
  const [data, setData] = useState([]);
  const { getPayments } = usePaymentsDatabase();

  async function fetchData() {
    const payments = await getPayments();
    setData(payments); // Vai buscar no banco de dados os pagamentos
  }

  useEffect(() => {
    
    // Executa na primeira vez a busca de dados
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row", margin: 5 }}>
      <View style={{ flex: 1 }}>
        <Text>{item.nome}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text>{item.data_pagamento}</Text>
          <Text>{item.numero_recibo}</Text>
        </View>
      </View>
      <View>
        <Text>{item.valor_pago}</Text>
      </View>
    </View>
  );
  
  

  return (
    <View style={{ flex: 1}}>
      <Text>Listagem</Text>
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={200}
        
      />


    </View>
  );
}

