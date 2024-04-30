import InputCheckbox from "@/components/input-checkbox";
import InputText from "@/components/input-text";
import Label from "@/components/label";
import { useAuth } from "@/contexts/auth";
import { Check } from "@phosphor-icons/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [check, setCheck] = useState<boolean>();

  const navigate = useNavigate();
  const token = useAuth();

  const handleClick = () => {
    token.getToken(email);
    localStorage.setItem("token", email);
    navigate("/dashboard");
  };

  return (
    <div className="my-20">
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
            <Link
              to="/forgot-password"
              className="text-[#4F46E5] font-semibold capitalize"
            >
              Lupa kata sandi?
            </Link>
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
          <div className="relative">
            <InputCheckbox
              id="remember_me"
              className="peer shrink-0 w-[25px] h-[25px] bg-[#f3f4f6] appearance-none rounded-[3px] checked:bg-[#f3f4f6] checked:border-0"
              checked={check}
              onChange={(e) => setCheck(e.target.checked)}
            />
            <Check
              size={24}
              className="absolute hidden peer-checked:block pointer-events-none top-0"
            />
          </div>
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
