import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function List() {
  const [data, setData] = useState([]);

  async function fetchData() {
    // Vai buscar no banco de dados os pagamentos
    return [];
  }

  useEffect(() => {
    // Executa na primeira vez a busca de dados
    async function loadData() {
      const tempData = await fetchData();
      setData(tempData);
    }
    loadData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Listagem</Text>
      {data.length > 0 &&
        data.map((item, index) => {
          return <Text key={index}>{item}</Text>;
        })}
    </View>
  );
}
