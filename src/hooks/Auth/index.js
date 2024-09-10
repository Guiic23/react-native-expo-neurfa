import { createContext, useContext, useEffect, useState } from "react";

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

    // Função de login
    const signIn = async ({ email, password }) => {
        if (email === "guisuper@gmail.com" && password === "gui123") {
            // Se as credenciais forem de um super usuário
            return setUser({
                authenticated: true,
                user: {
                    id: 1,
                    name: 'Super User',
                    email
                },
                role: Role.SUPER // Corrigido para usar a constante Role
            });

        } else if (email === "guiadm@gmail.com" && password === "gui123") {
            // Se as credenciais forem de um admin
            return setUser({
                authenticated: true,
                user: {
                    id: 2,
                    name: 'User Adm',
                    email
                },
                role: Role.ADM // Corrigido para usar a constante Role
            });

        } else if (email === "guiuser@gmail.com" && password === "gui123") {
            // Se as credenciais forem de um usuário comum
            return setUser({
                authenticated: true,
                user: {
                    id: 3,
                    name: 'User',
                    email
                },
                role: Role.USER // Corrigido para usar a constante Role
            });

        } else {
            // Credenciais inválidas
            return setUser({
                authenticated: false,
                user: null,
                role: null
            });
        }
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
