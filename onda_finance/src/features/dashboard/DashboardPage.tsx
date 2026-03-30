import { TransactionHistoryTable } from "./components/TransactionHistoryTable";
import { DashboardHeaderCard } from "./components/DashboardHeaderCard";


import { ContainerScreen } from "@/components/ContainerScreen";
import { ContainerCard } from "@/components/ContainerCard";


import { useGetBalance, useGetTransactionHistory } from "./hooks";
import { LoadingOverlay } from "@/components/LoadingOverlay";

export default function DashboardPage() {
    
    const {
        data: dataBalance,
        isLoading: isLoadingBalance
    } = useGetBalance();

    const {
        data: dataTransactionHistory,
        isLoading: isLoadingTransactionHistory
    } = useGetTransactionHistory();

    
    if(isLoadingBalance || isLoadingTransactionHistory) return <LoadingOverlay isLoading={true}/>

    return (    
        <ContainerScreen>
            <ContainerCard>
                <DashboardHeaderCard
                    balanceValue={dataBalance?.balance || ""}
                />

                <section className="w-full">
                    <TransactionHistoryTable
                        transactions={dataTransactionHistory?.transactions || []}
                    />
                </section>
            </ContainerCard>
        </ContainerScreen>
    );
};
