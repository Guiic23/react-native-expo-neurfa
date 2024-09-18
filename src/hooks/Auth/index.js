import { createContext, useContext, useEffect, useState } from "react";
import { useUsersDatabase } from "../../database/useUsersDatabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, Text, View } from "react-native";
// Definindo as possíveis roles de usuário
const AuthContext = createContext({});

export const Role = {
    SUPER: 'SUPER',
    ADM: 'ADM',
    USER: 'USER'
};

// Provider de autenticação
export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        authenticated: null,  // Corrigido 'autenticated' para 'authenticated'
        user: null,
        role: null,
    });
    const {authUser} = useUsersDatabase(); // Corrigido para usar a função authUser


    useEffect(() => {
       const loadStorageData = async () => {
           const storageUser = await AsyncStorage.getItem("@payment:user");
           if (storageUser) {
               setUser({
                     authenticated: true,
                     user: JSON.parse(storageUser),
                     role: JSON.parse(storageUser).role, // Corrigido para usar a constante Role
               });
           }
           else {
               setUser({
                     authenticated: false,
                     user: null,
                     role: null,
               });
           }
       };
       loadStorageData();
    }, []);

    useEffect(() => {
        console.log('AuthProvider:', user);
    }, [user]);

    // Função de login
    const signIn = async ({ email, password }) => {
        const response = await authUser({ email, password });
        console.log(!response);

        if(!response){
           setUser({
                authenticated: false,
                user: null,
                role: null,
            });
           throw new Error('Usuário ou senha inválidos');
        }
        await AsyncStorage.setItem("@payment:user", JSON.stringify(response));

           setUser({
                authenticated: true,
                user: response,
                role: response, // Corrigido para usar a constante Role
            });

       };

    // Função de logout
    const signOut = async () => {
        await AsyncStorage.removeItem("@payment:user");


        setUser({});
    };

    // Apenas para verificar no console as mudanças no estado de autenticação
    useEffect(() => {
        console.log('AuthProvider:', user);
    }, [user]);
    if (user.authenticated === null) {
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 28, marginTop: 15 }}>Carregando Dados do Usuário</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
      }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook personalizado para acessar o contexto de autenticação
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
