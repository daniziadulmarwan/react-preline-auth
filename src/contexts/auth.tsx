/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, ReactNode, useState } from "react";

interface AuthType {
  token: string;
  getToken: (value: string) => void;
}

const AuthContext = createContext<AuthType>({
  token: "",
  getToken: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");

  const getToken = (value: string) => {
    setToken(value);
  };

  return (
    <AuthContext.Provider value={{ token, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
