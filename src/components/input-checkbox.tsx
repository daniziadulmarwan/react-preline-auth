import {
  InputHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string;
  placeholder?: string;
  ref: string;
}

const Checkbox: ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
  { id, value, ...rest },
  ref
) => {
  return <input id={id} value={value} type="checkbox" {...rest} ref={ref} />;
};

const InputCheckbox = forwardRef(Checkbox);

export default InputCheckbox;
