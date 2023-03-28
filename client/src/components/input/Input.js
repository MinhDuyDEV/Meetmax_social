import React from "react";
import { useController } from "react-hook-form";
import { IconEyeOff, IconEyeOn } from "../../assets/icons";
import useToggleValue from "../../hooks/useToggleValue";

const Input = ({
  placeholder = "",
  type = "text",
  name,
  iconPassword = false,
  control,
  className = "",
  children,
}) => {
  const { value: showPassword, handleToggleValue: setShowPassword } =
    useToggleValue(false);
  if (type === "password") {
    type = showPassword ? "text" : "password";
  }
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      {children && (
        <div className="absolute z-10 md:left-5 left-[10px]  top-2/4 -translate-y-2/4">
          {children}
        </div>
      )}
      <input
        control={control}
        id={name}
        type={type}
        placeholder={placeholder}
        className={`pr-5 md:pl-[46px] pl-[34px] py-[9px] md:py-[15px] focus:border-blue transition-all duration-300 w-full text-gray text-body14 font-medium border border-gray rounded-[10px] border-opacity-20 outline-none placeholder:text-opacity-60 placeholder:text-gray placeholder:text-body14 placeholder:font-medium ${className}`}
        {...field}
      />
      {iconPassword && (
        <div
          className="absolute right-[20px] top-2/4 -translate-y-2/4 select-none p-2 cursor-pointer"
          onClick={setShowPassword}
        >
          {showPassword ? <IconEyeOn></IconEyeOn> : <IconEyeOff></IconEyeOff>}
        </div>
      )}
    </div>
  );
};

export default Input;
