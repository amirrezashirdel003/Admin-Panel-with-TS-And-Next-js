import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import FormField, { type FormFieldProps } from "./formField";

type ControlledFormFieldProps<T extends FieldValues> = Omit<
  FormFieldProps,
  "name" | "value" | "onChange" | "error"
> & {
  name: Path<T>;
  control: Control<T>;
  rules?: object;
};
function ControlledFormField<T extends FieldValues>({
  name,
  control,
  rules,
  ...props
}: ControlledFormFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <FormField {...field} {...props} error={error?.message} />
      )}
    />
  );
}

export default ControlledFormField;
