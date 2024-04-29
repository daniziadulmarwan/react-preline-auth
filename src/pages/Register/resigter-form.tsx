import InputText from "@/components/input-text";
import Label from "@/components/label";
import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log({ fullname, email, password });
  };

  return (
    <div className="my-20">
      {/* Brand */}
      <div
        id="brand"
        className="bg-[#EEF2FF] rounded-md h-[60px] w-[60px] grid place-items-center"
      >
        <h3 className="text-[28px] text-[#4F46E5] font-semibold">G</h3>
      </div>

      {/* Header Title */}
      <h5 className="mt-[55px] text-[32px] font-semibold">Bikin akun baru</h5>
      <p className="mt-[10px] text-base text-[#4B5563] w-[440px]">
        Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus
        langsung jadi deh!
      </p>

      {/* Form */}
      <form className="mt-11 w-[540px] space-y-[30px]">
        <div className="flex flex-col">
          <Label title="Nama Lengkap" htmlFor="fullname" />
          <InputText
            id="fullname"
            type="text"
            placeholder="Jhon Doe"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="email" title="Email" />
          <InputText
            type="text"
            id="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="password" title="Kata Sandi" />
          <InputText
            type="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="mt-8 bg-[#4F46E5] py-6 w-full rounded-[6px] text-base text-white font-semibold shadow-lg"
        >
          Masuk
        </button>
      </form>

      {/* Link to Login */}
      <p className="mt-14 text-center w-[540px] text-base font-semibold text-[#4B5563]">
        Sudah punya akun?{" "}
        <Link to={"/"} className="text-[#4F46E5]">
          Masuk sekarang!
        </Link>
      </p>
    </div>
  );
}

export default RegisterForm;
