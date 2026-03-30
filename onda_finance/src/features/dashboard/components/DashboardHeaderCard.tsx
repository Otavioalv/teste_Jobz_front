import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";

interface IDashboardHeaderCardProps {
    balanceValue: string, 
}

export const DashboardHeaderCard = ({
    balanceValue
}: IDashboardHeaderCardProps) => {
    const navigate = useNavigate();

    const {logout} = useAuthStore();

    return (
        <header className="flex flex-col gap-10 w-full justify-center items-center">
            <h1 className="text-xl text-start w-full">
                Onda Finance - Dashboard
            </h1>
            <Card className="w-full md:flex md:flex-row justify-between md:items-end">
                <div className="flex flex-col gap-1">
                    <CardTitle className="font-bold text-zinc-500">
                        SALDO TOTAL NA CONTA
                    </CardTitle>
                    <CardTitle className="font-black text-4xl md:text-5xl">
                        {balanceValue} R$
                    </CardTitle>
                </div>


                <div className="flex flex-col gap-2">
                    <Button 
                        className="cursor-pointer"
                        onClick={() => navigate("/transferencia")}
                    >
                        TRANSFERIR DINHEIRO
                    </Button>
                    <Button
                        className="cursor-pointer"
                        onClick={() => logout()}
                        variant={"outline"}
                    >
                        SAIR DA CONTA
                    </Button>
                </div>
            </Card>
        </header>
    );
}