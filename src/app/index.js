import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/Auth';

export default function App() {
  const {signIn, signOut} = useAuth();

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo</Text>
      <Button title="Signin Super" onPress={() => signIn({email: "guisuper@gmail.com", password:"gui123"})} />
      <Button title="Signin Adm" onPress={() => signIn({email: "guiadm@gmail.com", password:"gui123"})} />
      <Button title="Signin User" onPress={() => signIn({email: "guiuser@gmail.com", password:"gui123"})} />
      <Button title="Signout" onPress={() => signOut()} />
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
  },
  title: {
    fontFamily: "bold",
    fontSize: 20,
  },
});
