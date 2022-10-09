import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth"

export const  ProtectedLayout = ( {children}: { children: JSX.Element} ) => {
    const auth = useAuth()

    if (!auth.email){
        return <h1>Voce não possui acesso</h1>;
    }

    return children;
}