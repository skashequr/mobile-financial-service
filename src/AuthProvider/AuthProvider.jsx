import { createContext } from "react";

export const AuthContext = createContext(null);


const authInfo={

}
const AuthProvider = ({ children }) => {
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;