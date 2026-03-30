import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import type { Control, FieldValues, Path } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Controller } from "react-hook-form"

interface IFormFieldProps<T extends FieldValues> {
    name: Path<T>,
    control: Control<T>,
    label: string,
    type?: React.HTMLInputTypeAttribute | undefined,
    placeholder?: string,
}

export function FormField<T extends FieldValues>({
    name,
    control,
    label,
    type = "text",
    placeholder
}: IFormFieldProps<T>) {
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: `${label} obrigatório` }}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`form-${String(name)}`}>
                        {label}
                    </FieldLabel>
                    <Input
                        {...field}
                        id={`form-${name}`}
                        type={type}
                        placeholder={placeholder}
                        aria-invalid={fieldState.invalid}
                        autoComplete={type === "password" ? "current-password" : "off"}
                        value={field.value || ""}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    )
}
