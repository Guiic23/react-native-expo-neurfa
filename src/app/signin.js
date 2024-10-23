import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler, StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("guisuper@gmail.com");
  const [password, setPassword] = useState("gui123");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email, password });
      router.replace("/");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/cat1.png")} style={{ width: 150, height: 150 }} />
      <Text style={styles.title}>Login</Text>
      
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="#666" />
        <TextInput
          style={styles.emailinput}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#aaa"
        />
      </View>
      
      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="#666" />
        <TextInput
          style={styles.emailinput}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisibility}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons name={passwordVisibility ? "eye-off-outline" : "eye-outline"} size={20} color="#666" />
        </TouchableOpacity>
      </View>
    
      <TouchableOpacity style={styles.button} onPress={handleEntrarSuper}>
        <Text style={styles.buttonText}>Entrar como Super</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => { router.push("/about") }}>
      <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => { BackHandler.exitApp() }}>
      <Text style={styles.buttonText}>Sair do Aplicativo</Text>
      </TouchableOpacity>

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
    padding: 20,
  },
  title: {
    fontFamily: "regular",
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  inputbox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  emailinput: {
    flex: 1,
    fontFamily: "regular", 
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  linkButton: {
    marginVertical: 5,
  },
  linkButtonText: {
    color: '#007BFF',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
