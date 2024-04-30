import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string;
  placeholder?: string;
}

function InputCheckbox({ id, value, ...rest }: Props) {
  return <input id={id} value={value} type="checkbox" {...rest} />;
}

export default InputCheckbox;
