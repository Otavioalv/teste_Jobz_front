import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useForm, Controller } from "react-hook-form"


type FormData = {
    email: string
    password: string
}

export default function LoginPage() {
    const { control, handleSubmit } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <div className="flex h-screen items-center justify-center ">
            <Card>
                <CardTitle className="text-center text-lg font-bold">
                    <h1>Login</h1>
                </CardTitle>

                <div>
                    <form 
                        id="form-login"
                        onSubmit={handleSubmit(onSubmit)} 
                        className="space-y-4"
                    >
                        <FieldGroup>
                            <Controller
                                name="email"
                                control={control}
                                rules={{ required: "Email obrigatório" }}
                                render={({ field, fieldState }) => (
                                    <Field 
                                        data-invalid={fieldState.invalid}
                                    >
                                        <FieldLabel htmlFor="form-login-email">
                                            EMAIL ADDRESS
                                        </FieldLabel>
                                        
                                        <Input
                                            {...field}
                                            id="form-login-email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="name@company.com"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="password"
                                control={control}
                                rules={{ required: "Senha obrigatória" }}
                                render={({ field, fieldState }) => (
                                    <Field 
                                        data-invalid={fieldState.invalid}
                                    >
                                        <FieldLabel 
                                            htmlFor="form-password">
                                            PASSWORD
                                        </FieldLabel>
                                        
                                        <Input
                                            {...field}
                                            id="form-password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="password"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Button 
                                type="submit" 
                                className="w-full"
                                form="form-login"
                            >
                                ENTRAR
                            </Button>
                        </FieldGroup>
                    </form>
                </div>
            </Card>
        </div>
    )
}
