import InputText from "@/components/input-text";
import Label from "@/components/label";
import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    console.log({ email });
  };

  return (
    <div className="mt-20">
      <div
        id="brand"
        className="bg-[#EEF2FF] rounded-md h-[60px] w-[60px] grid place-items-center"
      >
        <h3 className="text-[28px] text-[#4F46E5] font-semibold">G</h3>
      </div>

      <h5 className="mt-[55px] text-[32px] font-semibold">Lupa kata sandi</h5>
      <p className="mt-[10px] text-base text-[#4B5563] w-[440px]">
        Masukkan email yang kamu daftarkan sebelumnya, nanti kamu bakal dikirim
        email.
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

        <button
          type="button"
          onClick={handleClick}
          className="mt-8 bg-[#4F46E5] py-6 w-full rounded-[6px] text-base text-white font-semibold shadow-lg"
        >
          Check Email
        </button>
      </form>

      <p className="mt-14 text-center w-[540px] text-base font-semibold text-[#4B5563]">
        Ingat kata sandi?{" "}
        <Link to={"/"} className="text-[#4F46E5]">
          Login sekarang!
        </Link>
      </p>
    </div>
  );
}

export default ForgotPasswordForm;
