import InputText from "@/components/input-text";
import Label from "@/components/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email tidak boleh kosong" })
    .email({ message: "Format email tidak valid" }),
});

type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ForgotPasswordSchema> = (data) => {
    toast.success("Email terdaftar " + data.email);
    localStorage.setItem("existedEmail", "daniziadulmarwan@gmail.com");
    navigate("/reset-password");
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

      <form
        className="w-full mt-11 md:w-[540px] space-y-[30px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <Label htmlFor="email" title="Email" />
          <InputText
            type="text"
            id="email"
            placeholder="example@example.com"
            {...register("email")}
          />
          {errors.email && (
            <small className="text-red-600 italic mt-1">
              {errors.email.message}
            </small>
          )}
        </div>

        <button
          type="submit"
          className="mt-8 bg-[#4F46E5] py-6 w-full rounded-[6px] text-base text-white font-semibold shadow-lg"
        >
          Check Email
        </button>
      </form>

      <p className="w-full mt-14 text-center md:w-[540px] text-base font-semibold text-[#4B5563]">
        Ingat kata sandi?{" "}
        <Link to={"/"} className="text-[#4F46E5]">
          Login sekarang!
        </Link>
      </p>
    </div>
  );
}

export default ForgotPasswordForm;
