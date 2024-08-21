import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const Role = {
    SUPER: 'SUPER',
    ADM: 'ADM',
    USER: 'USER'
};




export function AuthProvider({ children }) {
   

const [user, setUser] = useState({});

const signIn = async ({ email, password }) => {
    if (email === "guisuper@gmail.com" && password === "gui123"){

    return setUser({id: 1, name: 'Super ', email, password, role: 'SUPER'});

    }

    if (email === "guiadm@gmail.com" && password === "gui123"){

    return setUser({id: 1, name: 'Super ', email, password, role: 'ADM'});

    }

    if (email === "guiuser@gmail.com" && password === "gui123"){

    return setUser({id: 1, name: 'Super ', email, password, role: 'USER'});

    }


    //setUser({id: 1, name: 'John Doe', email, password});
};

 const signOut = async () => {
    setUser({});
    };

    useEffect(() => {console.log('AuthProvider:', user)}, [user] )
 
return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
        {children}       
    </AuthContext.Provider>

);
}
 export function useAuth() {
    const context = useContext (AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
 }

