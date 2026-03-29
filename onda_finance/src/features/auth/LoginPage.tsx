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
    <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-sm">
            <div>
                <h1>Login</h1>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: "Email obrigatório" }}
                        render={({ field, fieldState }) => (
                        <div>
                            <label>Email</label>
                            
                            <input {...field} type="email" />
                            
                            {fieldState.error && (
                                <p className="text-sm text-red-500">
                                    {fieldState.error.message}
                                </p>
                            )}
                        </div>
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: "Senha obrigatória" }}
                        render={({ field, fieldState }) => (
                        <div>
                            <label>Senha</label>
                            
                            <input {...field} type="password" />
                            
                            {fieldState.error && (
                                <p className="text-sm text-red-500">
                                    {fieldState.error.message}
                                </p>
                            )}
                        </div>
                        )}
                    />

                    <button type="submit" className="w-full">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
