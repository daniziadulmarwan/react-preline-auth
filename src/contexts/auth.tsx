/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, ReactNode, useState } from "react";

interface AuthType {
  token: string;
  name: string;
  getToken: (value: string) => void;
  getName: (value: string) => void;
}

const AuthContext = createContext<AuthType>({
  token: "",
  name: "",
  getToken: () => {},
  getName: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  const getToken = (value: string) => {
    setToken(value);
  };

  const getName = (value: string) => {
    setName(value);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        name,
        getToken,
        getName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
