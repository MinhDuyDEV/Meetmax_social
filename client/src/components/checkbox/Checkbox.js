import { useController } from "react-hook-form";

const Checkbox = ({ control, name, value, text }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <label className="cursor-pointer custom-checkbox">
      <input
        type="checkbox"
        value={value}
        className="hidden"
        id={name}
        checked={field.value}
        {...field}
      />
      <div className="flex items-center gap-x-3">
        <div className="flex items-center justify-center w-full h-full transition-all bg-white border-2 rounded-md border-gray border-opacity-80 custom-checkbox-square">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7453 4.89733L5.93178 12.7109L2.25482 9.03391L3.17132 8.11741L5.93178 10.8714L12.8288 3.98083L13.7453 4.89733Z"
              fill="white"
            />
          </svg>
        </div>
        <label
          htmlFor={name}
          className="font-medium cursor-pointer select-none text-body14 text-gray"
        >
          {text}
        </label>
      </div>
    </label>
  );
};

export default Checkbox;
