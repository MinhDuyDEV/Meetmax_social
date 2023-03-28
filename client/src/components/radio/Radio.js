import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ checked, control, value, children, name }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <label className="cursor-pointer custom-radio">
      <input
        {...field}
        type="radio"
        value={value}
        className="hidden"
        checked={checked}
      />
      <div className="w-full h-full bg-white rounded-full"></div>
    </label>
  );
};

export default Radio;
