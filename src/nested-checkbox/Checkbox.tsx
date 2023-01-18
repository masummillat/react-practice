import React from "react";

interface ICheckbox {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}
const Checkbox: React.FC<ICheckbox> = ({ name, label, onChange, checked }) => {
  return (
    <input
      data-before={label}
      checked={checked}
      className="relative my-2 hover:cursor-pointer before:content-[attr(data-before)] before:inline-block before:w-max before:absolute before:left-5 before:-top-1.5 "
      name={name}
      onChange={onChange}
      type="checkbox"
    />
  );
};

export default Checkbox;
