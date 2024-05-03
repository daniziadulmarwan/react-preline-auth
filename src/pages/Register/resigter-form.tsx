import InputText from "@/components/input-text";
import Label from "@/components/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const signupSchema = z.object({
  name: z.string().nonempty({ message: "Nama tidak boleh kosong" }),
  email: z
    .string()
    .nonempty({ message: "Email tidak boleh kosong" })
    .email({ message: "Format email salah" }),
  password: z
    .string()
    .nonempty({ message: "Password tidak boleh kosong" })
    .min(6, { message: "Password minimal terdiri dari 6 karakter" }),
});

type SignUpSchema = z.infer<typeof signupSchema>;

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
    console.log(data);
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
      <form
        className="w-full mt-11 md:w-[540px] space-y-[30px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <Label title="Nama Lengkap" htmlFor="fullname" />
          <InputText
            id="fullname"
            type="text"
            placeholder="Jhon Doe"
            {...register("name")}
          />
          {errors.name && (
            <small className="text-red-600 italic mt-1">
              {errors.name.message}
            </small>
          )}
        </div>

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

        <div className="flex flex-col">
          <Label htmlFor="password" title="Kata Sandi" />
          <InputText
            type="password"
            id="password"
            placeholder="••••••••"
            {...register("password")}
          />
          {errors.password && (
            <small className="text-red-600 italic mt-1">
              {errors.password.message}
            </small>
          )}
        </div>

        <button
          type="submit"
          className="mt-8 bg-[#4F46E5] py-6 w-full rounded-[6px] text-base text-white font-semibold shadow-lg"
        >
          Masuk
        </button>
      </form>

      {/* Link to Login */}
      <p className="w-full mt-14 text-center md:w-[540px] text-base font-semibold text-[#4B5563]">
        Sudah punya akun?{" "}
        <Link to={"/"} className="text-[#4F46E5]">
          Masuk sekarang!
        </Link>
      </p>
    </div>
  );
}

export default RegisterForm;
