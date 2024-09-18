import { createContext, useContext, useEffect, useState } from "react";
import { useUsersDatabase } from "../../database/useUsersDatabase";
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
       

           setUser({
                authenticated: true,
                user: response,
                role: response, // Corrigido para usar a constante Role
            });

       };

    // Função de logout
    const signOut = async () => {
        setUser({
            authenticated: false,
            user: null,
            role: null
        });
    };

    // Apenas para verificar no console as mudanças no estado de autenticação
    useEffect(() => {
        console.log('AuthProvider:', user);
    }, [user]);

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
