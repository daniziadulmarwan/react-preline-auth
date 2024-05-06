// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAuth } from "@/contexts/auth";
// import { UserType } from "@/types/user-type";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";

// export const axiosJwt = axios.create();

// axiosJwt.interceptors.request.use(async (config): Promise<any> => {
//   const { setNewToken } = useAuth();
//   const currentDate = new Date();
//   const response = await axios.get(
//     "http://localhost:5000/api/authenticated/refresh-token",
//     {
//       withCredentials: true,
//     }
//   );
//   const decodedToken: UserType = jwtDecode(response.data);

//   if (+decodedToken.exp * 1000 < currentDate.getTime()) {
//     config.headers.Authorization = `Bearer ${response.data}`;
//     setNewToken(response.data);
//   }

//   return config;
// });
