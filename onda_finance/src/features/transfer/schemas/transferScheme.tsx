import { z } from "zod";

export const transferSchema = z.object({
  recipient: z
    .email("Email inválido")
    .nonempty("Destinatário obrigatório"),

  amount: z
    .string()
    .nonempty("Valor obrigatório")
    .refine(val => /^\d+(,\d{1,2})?$/.test(val), {
      message: "Valor deve conter apenas números e opcionalmente vírgula",
    })
    .refine(val => Number(val.replace(",", ".")) > 0, {
      message: "O valor deve ser maior que zero",
    }),
});

export type TransferInput = z.input<typeof transferSchema>;
