/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { UserType } from "@/types/user-type";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface AuthType {
  token: string;
  name: string;
  expire: string;
  getToken: (value: string) => void;
  setNewToken: (value: string) => void;
  refreshToken: () => void;
}

const AuthContext = createContext<AuthType>({
  token: "",
  name: "",
  expire: "",
  getToken: () => {},
  setNewToken: () => {},
  refreshToken: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [expire, setExpire] = useState("");

  const refreshToken = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/authenticated/refresh-token",
      { withCredentials: true }
    );
    setToken(response.data);
    const decoded: UserType = jwtDecode(response.data);
    setName(decoded.name);
    setExpire(decoded.exp);
  };

  const getToken = (value: string) => {
    setToken(value);
  };

  const setNewToken = (value: string) => {
    setToken(value);
  };

  useEffect(() => {
    refreshToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        name,
        expire,
        getToken,
        refreshToken,
        setNewToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
