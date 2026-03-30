import { ContainerScreenAlignCenter } from "@/components/ContainerScreenAlignCenter"
import { transferSchema } from "./schemas/transferScheme"
import { FormField } from "@/components/form/FormField"
import { Card, CardTitle } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldGroup } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { useTransfer } from "./hooks"


import type {TransferInput} from "./schemas/transferScheme"
import { LoadingOverlay } from "@/components/LoadingOverlay"
import { useNavigate } from "react-router-dom"


export default function TransferPage() {
    const navigate = useNavigate();

    const { control, handleSubmit } = useForm<TransferInput>({
        resolver: zodResolver(transferSchema),
        defaultValues: {
            amount: "",
            recipient: ""
        }
    });

    const {
        mutate: mutateTransfer,
        isPending: isPendingTransfer,
    } = useTransfer();


    const onSubmit = (data: TransferInput) => {
        mutateTransfer({amount: data.amount});
        navigate("/dashboard");
    }

    return (
        <ContainerScreenAlignCenter>
            <LoadingOverlay
                isLoading={isPendingTransfer}
            />
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
