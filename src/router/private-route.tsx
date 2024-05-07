/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "@/contexts/auth";
import { UserType } from "@/types/user-type";
import { axiosJwt } from "@/utils/axios";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateRoute() {
  const { getName, getToken } = useAuth();
  const [expire, setExpire] = useState<string>("");
  const navigate = useNavigate();

  axiosJwt.interceptors.request.use(
    async (config): Promise<any> => {
      const currentDate = new Date();
      if (+expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(
          "http://localhost:5000/api/authenticated/refresh-token",
          {
            withCredentials: true,
          }
        );
        config.headers.Authorization = `Bearer ${response.data}`;
        getToken(response.data);

        const decoded: UserType = jwtDecode(response.data);

        getName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const refreshToken = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/authenticated/refresh-token",
        { withCredentials: true }
      );
      getToken(response.data);
      const decoded: UserType = jwtDecode(response.data);
      getName(decoded.name);
      setExpire(decoded.exp);
    } catch (error: any) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  return <Outlet />;
}

export default PrivateRoute;
