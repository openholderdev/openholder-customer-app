import { FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  register: UseFormRegister<any>;
  registerKey: string;
  errors?: FieldErrors;
  type?: string;
  placeholder?: string;
}

export default function Input({
  label,
  register,
  registerKey,
  errors = {},
  type = "text",
  placeholder,
}: InputProps) {
  const error = errors[registerKey];

  return (
    <>
      <label className="block text-sm font-medium mb-2 text-gray-700">{label}</label>
      <input
        {...register(registerKey)}
        type={type}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message as string}</p>}
    </>
  );
}
