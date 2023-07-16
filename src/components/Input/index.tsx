import { ChangeEventHandler } from "react";

type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  placeholder?: string;
  className?: string;
}

const Input = ({className, type, value, onChange, placeholder}: InputProps) => {
  return (
    <input className={`${className} outline-none border-solid rounded-md border-2 py-2 px-2 border-gray-300`} placeholder={placeholder} type={type} value={value} onChange={onChange} />
  )
}

export default Input;