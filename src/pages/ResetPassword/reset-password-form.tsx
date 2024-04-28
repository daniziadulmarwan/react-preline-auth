import InputText from "@/components/input-text";
import Label from "@/components/label";
import { useState } from "react";

function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleClick = () => {
    console.log({ newPassword, confirmNewPassword });
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
        Atur ulang kata sandi
      </h5>
      <p className="mt-[10px] text-base text-[#4B5563] w-[440px]">
        Jangan pake kata sandi yang susah-susah makannya, ngerepotin mulu jadi
        orang.
      </p>

      <form className="mt-11 w-[540px] space-y-[30px]">
        <div className="flex flex-col">
          <Label htmlFor="new_password" title="Kata Sandi Baru" />
          <InputText
            type="password"
            id="new_password"
            placeholder="••••••••"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="confirm_new_password" title="Konfirmasi Kata Sandi" />
          <InputText
            type="password"
            id="confirm_new_password"
            placeholder="••••••••"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="mt-8 bg-[#4F46E5] py-6 w-full rounded-[6px] text-base text-white font-semibold shadow-lg"
        >
          Atur Ulang
        </button>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
