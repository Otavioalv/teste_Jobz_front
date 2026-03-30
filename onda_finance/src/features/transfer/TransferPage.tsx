import { ContainerScreenAlignCenter } from "@/components/ContainerScreenAlignCenter"
import { Card, CardTitle } from "@/components/ui/card"
import { FieldGroup } from "@/components/ui/field"
import { FormField } from "../auth/components/FormField"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { transferSchema } from "./schemas/transferScheme"
import type {TransferInput} from "./schemas/transferScheme"

export default function TransferPage() {
    // o tipo do meio e "contexto"
    // tipar corretamente caso haja uso de contextos para
    const { control, handleSubmit } = useForm<TransferInput>({
        resolver: zodResolver(transferSchema),
        defaultValues: {
            amount: "",
            recipient: "otavio@gmail.com"
        }
    });

    const onSubmit = (data: TransferInput) => {
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
                            name={"recipient"}
                            placeholder="name@company.com"
                        />

                        <FormField
                            control={control}
                            label="VALOR DA TRANSFERÊNCIA"
                            placeholder="0,00"
                            name={"amount"}
                            type="text"
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
