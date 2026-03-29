import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";


interface IDashboardHeaderCardProps {
    balanceValue: string, 
}

export const DashboardHeaderCard = ({
    balanceValue
}: IDashboardHeaderCardProps) => {
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

                <Button className="cursor-pointer">
                    TRANSFERIR DINHEIRO
                </Button>
            </Card>
        </header>
    );
}