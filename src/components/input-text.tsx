import {
  InputHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type: "text" | "password";
  placeholder?: string;
  ref: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { id, placeholder, type, ...rest },
  ref
) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="bg-[#F3F4F6] py-6 px-10 rounded-[8px] focus:outline-none placeholder:text-black"
      {...rest}
      ref={ref}
    />
  );
};

const InputText = forwardRef(Input);

export default InputText;
