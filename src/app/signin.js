import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';

export default function App() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email, password });
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo a Neurfa</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={24} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={passwordVisibility}
          autoCapitalize="none"
        />
        <Ionicons
          name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
          size={24}
          color="#888"
          style={styles.iconToggle}
          onPress={togglePasswordVisibility}
        />
      </View>

      <TouchableOpacity onPress={() => Alert.alert("Esqueceu sua senha?", "Função ainda não implementada.")}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleEntrarSuper}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={() => router.push("register")}>
        <Text style={styles.registerButtonText}>Criar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exitButton} onPress={() => BackHandler.exitApp()}>
        <Ionicons name="exit-outline" size={20} color="#888" />
        <Text style={styles.exitButtonText}>Sair do aplicativo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: "100%",
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 8,
  },
  iconToggle: {
    marginLeft: 8,
  },
  forgotPassword: {
    fontSize: 14,
    color: "#007bff",
    textDecorationLine: "underline",
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 16,
  },
  loginButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  registerButton: {
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 16,
  },
  registerButtonText: {
    fontSize: 16,
    color: "#007bff",
    fontWeight: "bold",
  },
  exitButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  exitButtonText: {
    fontSize: 14,
    color: "#888",
    marginLeft: 8,
  },
});
