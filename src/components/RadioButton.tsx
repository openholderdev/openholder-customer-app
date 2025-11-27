import { FieldErrors, UseFormRegister } from "react-hook-form";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioSelectProps {
  label: string;
  registerKey: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors;
  options: RadioOption[];
  direction?: "horizontal" | "vertical";
}

export default function RadioSelect({
  label,
  registerKey,
  register,
  errors = {},
  options,
  direction = "horizontal",
}: RadioSelectProps) {
  const error = errors[registerKey];
  const flexDirection = direction === "horizontal" ? "flex gap-4" : "flex flex-col gap-3";

  return (
    <div>
      <label className="block text-sm font-medium mb-3 text-gray-700">{label}</label>
      <div className={flexDirection}>
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
            <input
              {...register(registerKey)}
              type="radio"
              value={option.value}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error.message as string}</p>}
    </div>
  );
}
