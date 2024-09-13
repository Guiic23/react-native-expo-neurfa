import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const { signIn, signOut } = useAuth();
  const [email, setEmail] = useState("guisuper@gmail.com");
  const [password, setPassword] = useState("gui123");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  

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
      <View style={styles.inputbox}>
       <Ionicons name="mail-open-outline" size={20} color="black" />
        <TextInput style={styles.emailinput} placeholder="E-mail" value={email} onChangeText={setEmail}/> 
        
      </View>
      <View style={styles.inputbox}>
       <Ionicons name="lock-closed-outline" size={20} color="black" />
        <TextInput style={styles.emailinput} placeholder="Senha" value={password} onChangeText={setPassword}/> 
        <Ionicons name="eye-outline" size={20} color="black"  />
        
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
    fontFamily: "light",
    fontSize: 20,
  },
  inputbox: {
    flexDirection: "row",
    alignItems: "center",
    margin: 40,
    justifyContent: "center",
    gap: 15,

  },
  emailinput: {
    flex: 1,
    fontFamily: "regular",
    fontSize: 20,
   
  },
});
