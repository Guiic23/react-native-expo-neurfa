import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const { signIn, signOut } = useAuth();

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email: "guisuper@gmail.com", password: "gui123" })
      router.replace("/");
    } catch (error) {
      console.log(error);

    }
  };

  const handleEntrarAdm = async () => {
    try {
      await signIn({ email: "guiadm@gmail.com", password: "gui123" })
      router.replace("/");
    } catch (error) {
      console.log(error);

    }
  };

  const handleEntrarUser = async() => {
    try {
      await signIn({ email: "guiuser@gmail.com", password: "gui123" })
      router.replace("/");
    } catch (error) {
      console.log(error);

    }
  };
 
  

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo</Text>
      <View>
       <Ionicons name="logo-react" size={100} color="black" />
      </View>
      <Button title="Signin Super" onPress={(handleEntrarSuper)} />
       <Button title="Sobre" onPress={() => {router.push("/about")}} />
      <Button title="Sair do Aplicativo" onPress={() => {BackHandler.exitApp()}} />
     
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:15,
  },
  title: {
    fontFamily: "bold",
    fontSize: 20,
  },
});
