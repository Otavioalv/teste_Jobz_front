import { TransactionHistoryTable } from "./components/TransactionHistoryTable";
import { DashboardHeaderCard } from "./components/DashboardHeaderCard";

import type { ITransactionDataType } from "@/types";
import { ContainerScreen } from "@/components/ContainerScreen";
import { ContainerCard } from "@/components/ContainerCard";


export default function DashboardPage() {
    const invoices: ITransactionDataType[] = [
        {
            id: "1",
            type: "received",
            value: "20",
            date: "10-20-2024",
            userId: "12",
        },
        {
            id: "2",
            type: "received",
            value: "20",
            date: "10-20-2024",
            userId: "12",
        },
        {
            id: "3",
            type: "received",
            value: "20",
            date: "10-20-2024",
            userId: "12",
        },
        {
            id: "4",
            type: "received",
            value: "20",
            date: "10-20-2024",
            userId: "12",
        },
        {
            id: "5",
            type: "received",
            value: "20",
            date: "10-20-2024",
            userId: "12",
        },
        {
            id: "6",
            type: "received",
            value: "20",
            date: "10-20-2024",
            userId: "12",
        },
        {
            id: "7",
            type: "received",
            value: "20",
            date: "10-20-2024",
            userId: "12",
        },
    ]

    return (
        <ContainerScreen>
            <ContainerCard>
                <DashboardHeaderCard
                    balanceValue="2394.34"
                />

                <section className="w-full">
                    <TransactionHistoryTable
                        transactions={invoices}
                    />
                </section>
            </ContainerCard>
        </ContainerScreen>
    );
};
