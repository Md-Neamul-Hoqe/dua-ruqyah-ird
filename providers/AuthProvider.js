'use client'
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext([])

const AuthProvider = ({ children }) => {
    const [ cat, setCat ] = useState(null);


    const authInfo = {
        cat, setCat
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;