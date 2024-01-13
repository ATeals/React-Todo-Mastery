import { useState } from "react";

type FormProps<T> = {
  defaultValues: T;
};

interface FormRegisterOptions {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
}

export const useFrom = <T extends object>({ defaultValues }: FormProps<T>) => {
  const [formState, setFormState] = useState(defaultValues);

  const register = (
    type: keyof T,
    { required, maxLength, minLength }: FormRegisterOptions = { required: false }
  ) => {
    const onChange = (e: React.ChangeEvent) => {
      const input = e.target as HTMLInputElement;

      setFormState((formState) => ({ ...formState, [type]: input.value }));
    };

    const value = formState[type];

    return { onChange, value, required, maxLength, minLength };
  };

  const resetField = (type: keyof T) => setFormState((formState) => ({ ...formState, [type]: "" }));

  return { formState, register, resetField };
};
