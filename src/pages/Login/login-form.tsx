import InputText from "@/components/input-text";
import Label from "@/components/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "@phosphor-icons/react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

const signinSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email tidak boleh kosong" })
    .email({ message: "Format email tidak valid" })
    .trim(),
  password: z
    .string()
    .nonempty({ message: "Password tidak boleh kosong" })
    .min(6, { message: "Password minimal terdiri dari 6 karakter" })
    .trim(),
  agree: z.boolean().nullable(),
});

type SignInSchema = z.infer<typeof signinSchema>;

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit: SubmitHandler<SignInSchema> = (data) => {
    axios
      .post(
        "http://localhost:5000/api/login",
        {
          email: data.email,
          password: data.password,
        },
        { withCredentials: true }
      )
      .then((value) => {
        console.log(value.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
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

      <form
        className="w-full mt-11 md:w-[540px] space-y-[30px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <Label htmlFor="email" title="Email" />
          <InputText
            id="email"
            type="text"
            placeholder="example@example.com"
            {...register("email")}
          />
          {errors.email && (
            <small className="text-red-600 italic mt-1">
              {errors.email.message}
            </small>
          )}
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
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password")}
          />
          {errors.password && (
            <small className="text-red-600 italic mt-1">
              {errors.password.message}
            </small>
          )}
        </div>

        <div className="flex">
          <div className="relative">
            <input
              type="checkbox"
              id="remember_me"
              className="peer shrink-0 w-[25px] h-[25px] bg-[#f3f4f6] appearance-none rounded-[3px] checked:bg-[#f3f4f6] checked:border-0"
              {...register("agree")}
            />
            <Check
              size={24}
              className="absolute hidden peer-checked:block pointer-events-none top-0"
            />
          </div>
          <Label htmlFor="remember_me" title="Ingat saya" className="ml-4" />
        </div>
        {errors.agree && (
          <small className="text-red-600 italic">{errors.agree.message}</small>
        )}

        <button
          type="submit"
          className="mt-8 bg-[#4F46E5] py-6 w-full rounded-[6px] text-base text-white font-semibold shadow-lg"
        >
          Masuk
        </button>
      </form>

      <p className="w-full mt-14 text-center md:w-[540px] text-base font-semibold text-[#4B5563]">
        Belum punya akun?{" "}
        <Link to={"/signup"} className="text-[#4F46E5]">
          Daftar sekarang, gratis!
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
