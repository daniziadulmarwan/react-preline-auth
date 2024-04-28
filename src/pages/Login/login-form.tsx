import InputCheckbox from "@/components/input-checkbox";
import InputText from "@/components/input-text";
import Label from "@/components/label";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log({ email, password });
  };

  return (
    <div className="mt-20">
      <div
        id="brand"
        className="bg-[#EEF2FF] rounded-md h-[60px] w-[60px] grid place-items-center"
      >
        <h3 className="text-[28px] text-[#4F46E5] font-semibold">G</h3>
      </div>

      <h5 className="mt-[55px] text-[32px] font-semibold">
        Masuk ke akun kamu
      </h5>
      <p className="mt-[10px] text-base text-[#4B5563] w-[440px]">
        Belajar gratis di zeiteim.tech, dan memulai karir yang kamu cita-cita
        sejak masa dini, belajar agama dan dunia.{" "}
        <span className="font-semibold text-black">Jujur dan Kuat!</span>
      </p>

      <form className="mt-11 w-[540px] space-y-[30px]">
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
          <div className="flex justify-between">
            <Label htmlFor="password" title="Password" />
            <a href="#" className="text-[#4F46E5] font-semibold capitalize">
              Lupa kata sandi?
            </a>
          </div>
          <InputText
            type="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex">
          <InputCheckbox id="remember_me" />
          <Label htmlFor="remember_me" title="Ingat saya" className="ml-4" />
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="mt-8 bg-[#4F46E5] py-6 w-full rounded-[6px] text-base text-white font-semibold shadow-lg"
        >
          Masuk
        </button>
      </form>

      <p className="mt-14 text-center w-[540px] text-base font-semibold text-[#4B5563]">
        Belum punya akun?{" "}
        <Link to={"/signup"} className="text-[#4F46E5]">
          Daftar sekarang, gratis!
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
