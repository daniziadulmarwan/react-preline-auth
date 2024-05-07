/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosJwt } from "@/utils/axios";
import { useAuth } from "@/contexts/auth";

export default function Dashboard() {
  const { name, token } = useAuth();

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
