/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { UserType } from "@/types/user-type";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [token, setToken] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [expire, setExpire] = useState<string>("");

  const navigate = useNavigate();

  const axiosJwt = axios.create();

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
        setToken(response.data);
        const decoded: UserType = jwtDecode(response.data);
        setName(decoded.name);
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
      const response = await axiosJwt.get(
        "http://localhost:5000/api/authenticated/refresh-token",
        { withCredentials: true }
      );
      setToken(response.data);
      const decoded: UserType = jwtDecode(response.data);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error: any) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    refreshToken();
  });

  const getMe = () => {
    axiosJwt
      .get("http://localhost:5000/api/authenticated/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {
        console.log(value.data);
      })
      .catch((error: any) => {
        console.error(error.message);
      });
  };

  return (
    <div className="mx-40 pt-40">
      <h5>
        Welcome <strong>{name}</strong>
      </h5>
      <button
        type="button"
        className="bg-[#4F46E5] py-3 mt-10 px-10 rounded-[6px] text-base text-white font-semibold shadow-lg"
        onClick={getMe}
      >
        Logout
      </button>
    </div>
  );
}
