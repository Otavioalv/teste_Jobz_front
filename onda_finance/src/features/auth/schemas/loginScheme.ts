import { z } from "zod"

export const loginSchema = z.object({
    email: z
        .email("Email inválido")
        .nonempty("Email obrigatório"),
    password: z
        .string()
        .min(8, "Senha deve ter ao menos 8 caracteres")
        // Regex que verifica se string contem numero, letra maiusculo ou minuscula, e caracter especial
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/, 
            "Senha deve conter letra maiúscula, minúscula, número e caractere especial"
        ),
});

export type LoginFormData = z.infer<typeof loginSchema>
