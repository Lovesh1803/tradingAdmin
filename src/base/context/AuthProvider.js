import { createContext, useContext, useEffect, useState } from "react";
import { getAuthLocalStorage } from "../../storage/getLocalStorage";

export const AuthContext = createContext();

/**
 * @author Lovesh Singh
 * @since 10-08-2023
 * @description to provide auth contexts
 * @param {children} child components of Auth Wrapper component
 * @returns JSX.Element
 */
const AuthProvider = ({ children }) => {
  const [isAdminLogin, setIsAdninLogin] = useState(false);

  useEffect(() => {
    getAuthLocalStorage().then((res) => {
        console.log("Admin login incontext: ", res);
      setIsAdninLogin(res.isLoggedIn);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isAdminLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
