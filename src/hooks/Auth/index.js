import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const Role = {
    SUPER: 'SUPER',
    ADM: 'ADM',
    USER: 'USER'
};




export function AuthProvider({ children }) {


    const [user, setUser] = useState({
        autenticated: null,
        user: null,
        role: null,
    });

    const signIn = async ({ email, password }) => {
        if (email === "guisuper@gmail.com" && password === "gui123") {

            return setUser({
                autenticated: true,
                user: {
                    id: 1,
                    name: 'Super User',
                    email
                },
                role: 'Role.SUPER'
            });

        }

        else if (email === "guiadm@gmail.com" && password === "gui123") {

            return setUser({
                autenticated: true,
                user: {
                    id: 2,
                    name: 'User Adm ',
                    email
                },
                role: 'Role.ADM'
            });

        }

       else if (email === "guiuser@gmail.com" && password === "gui123") {

            return setUser({
                autenticated: true,
                user: {
                    id: 3,
                    name: 'User ',
                    email,
                    password,
                    role: 'Role.USER'
                }
            });

        }
        else {
            return setUser({
                autenticated: false,
                user: {},
                role: null
            });
        }


       
    };

    const signOut = async () => {
        setUser({});
    };

    useEffect(() => { console.log('AuthProvider:', user) }, [user])

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>

    );
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

