import { ContainerScreenAlignCenter } from "@/components/ContainerScreenAlignCenter"
import { loginSchema, type LoginFormData } from "./schemas/loginScheme"
import { Card, CardTitle } from "@/components/ui/card"
import { FieldGroup } from "@/components/ui/field"
import { FormField } from "./components/FormField"
import { Button } from "@/components/ui/button"
import { useForm} from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"

export default function LoginPage() {
    const { control, handleSubmit } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            password: "",
            email: ""
        }
    })

    const onSubmit = (data: LoginFormData) => {
        console.log(data)
    }

    return (
        <ContainerScreenAlignCenter>
            <Card className="w-full sm:max-w-137.5">
                <CardTitle className="text-center text-lg font-bold">
                    Login
                </CardTitle>

                <form 
                    id="form-login"
                    onSubmit={handleSubmit(onSubmit)} 
                    className="space-y-4"
                >
                    <FieldGroup>
                        <FormField
                            control={control}
                            label="EMAIL"
                            type="email"
                            name={"email"}
                            placeholder="name@company.com"
                        />

                        <FormField
                            control={control}
                            label="SENHA"
                            name={"password"}
                            type="password"
                            placeholder="Digite sua senha"
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
            </Card>
        </ContainerScreenAlignCenter>
    )
}
