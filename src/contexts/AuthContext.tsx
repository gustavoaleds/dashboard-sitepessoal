import React, { createContext, useContext, useEffect, useState } from "react";
import { LoginData } from "../services/authService";

interface AuthContextProps {
    authenticated: boolean;
    user: LoginData;
    login: (user: LoginData) => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({} as LoginData);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser){
            setUser (JSON.parse(storedUser));
            setAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = (loggedInUser: LoginData) => {
        setUser(loggedInUser);
        setAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
    }

    const logout = () => {
        setUser({} as LoginData);
        setAuthenticated(false);
        localStorage.removeItem("user");
    }
    return(
        <AuthContext.Provider value={{ authenticated, user, login, logout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )

}
