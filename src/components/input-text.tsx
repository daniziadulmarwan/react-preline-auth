import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type: string;
  value?: string;
  placeholder?: string;
}

function InputText({ id, value, placeholder, type, ...rest }: Props) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      className="bg-[#F3F4F6] py-6 px-10 rounded-[8px] focus:outline-none placeholder:text-black"
      {...rest}
    />
  );
}

export default InputText;
