import React, { ChangeEvent } from "react";
import style from "./Input.module.scss";

interface InputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, type }) => {
  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
  };

  return (
    <input className={style.input} min={0} type={type || "number"} onChange={changeHandler} value={value} />
  );
};

export { Input };
