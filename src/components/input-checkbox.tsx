import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string;
  placeholder?: string;
}

function InputCheckbox({ id, value, ...rest }: Props) {
  return (
    <input
      id={id}
      value={value}
      type="checkbox"
      className="w-[25px] h-[25px] bg-[#f3f4f6] appearance-none rounded-[3px] checked:bg-[#f3f4f6] checked:border-0"
      {...rest}
    />
  );
}

export default InputCheckbox;
