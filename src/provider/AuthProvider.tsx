import { useState } from "react";
import TokenAPI from "../api/TokenAPI";
import { AuthContext } from "../contexts/AuthContext";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const refreshToken = async (): Promise<string | null> => {
        const refresh = localStorage.getItem("refreshToken");
        if (!refresh) return null;

        try {
            const newToken = await TokenAPI(refresh);
            setToken(newToken);

            return newToken;
        } catch (err) {
            setToken(null);
            return null;
        }
    };

    return (
        <AuthContext.Provider value={{ token: token, setToken, refreshToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
