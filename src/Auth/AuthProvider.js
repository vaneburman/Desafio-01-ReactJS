import { React, createContext, useState } from 'react';

//creo el contexto y lo exporto
export const AuthContext = createContext();

export default function AuthProvider({Children}) {
    const [user, setUser] = useState(undefined);

    const ContextValue = {
        user,
        login() {setUser({ id: 1, userName: 'Vanesa'})},
        logout() {setUser(undefined)}
    }
    return (
        <AuthContext.Provider value={ContextValue}>
            {Children}
        </AuthContext.Provider>
    )
}

