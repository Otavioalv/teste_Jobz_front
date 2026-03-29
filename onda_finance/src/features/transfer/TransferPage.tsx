import { ContainerScreenAlignCenter } from "@/components/ContainerScreenAlignCenter"
import { Card, CardTitle } from "@/components/ui/card"
import { FieldGroup } from "@/components/ui/field"
import { FormField } from "../auth/components/FormField"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { transferSchema, type TransferFormData } from "./schemas/transferScheme"

export default function TransferPage() {
    const { control, handleSubmit } = useForm<TransferFormData>({
        resolver: zodResolver(transferSchema),
        defaultValues: {
            amount: 0,
            recipient: ""
        }
    })

    const onSubmit = (data: TransferFormData) => {
        console.log(data)
    }

    return (
        <ContainerScreenAlignCenter>
            <Card className="w-full sm:max-w-137.5">
                <CardTitle className="text-center text-lg font-bold">
                    Transferência
                </CardTitle>

                <form 
                    id="form-transfer"
                    onSubmit={handleSubmit(onSubmit)} 
                    className="space-y-4"
                >
                    <FieldGroup>
                        <FormField
                            control={control}
                            label="EMAIL DO DESTINATÁRIO"
                            type="email"
                            name={"amount"}
                            placeholder="name@company.com"
                        />

                        <FormField
                            control={control}
                            label="VALOR DA TRANSFERÊNCIA"
                            placeholder="0,00"
                            name={"recipient"}
                            type="number"
                        />

                        <Button
                            type="submit" 
                            className="w-full"
                            form="form-transfer"
                        >
                            CONFIRMAR TRANSFERÊNCIA
                        </Button>
                    </FieldGroup>
                </form>
            </Card>
        </ContainerScreenAlignCenter>
    )
};
