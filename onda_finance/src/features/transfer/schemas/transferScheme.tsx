import { z } from "zod"

export const transferSchema = z.object({
    recipient: z
        .email("Email inválido"),
    amount: z
        .number(),
});

export type TransferFormData = z.infer<typeof transferSchema>;
