import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase.utils";

export const AuthContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {

        const unsubscribe = onAuthStateChangedListener((user) => { 
            if(user){
                createUserDocumentFromAuth(user);
            }

            setCurrentUser(user)
        });

        return unsubscribe;
        
    }, [])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;

