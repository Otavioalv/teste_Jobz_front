

// interface IDashboardPageProps {
// };

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function DashboardPage(/* {}: IDashboardPageProps */) {


    const invoices = [
        {
            id: "1",
            type: "received",
            value: "20",
            date: "10-20-2024",
            status: "Completed",
        },
        {
            id: "2",
            type: "received",
            value: "20",
            date: "10-20-2024",
            status: "Completed",
        },
        {
            id: "3",
            type: "received",
            value: "20",
            date: "10-20-2024",
            status: "Completed",
        },
        {
            id: "4",
            type: "received",
            value: "20",
            date: "10-20-2024",
            status: "Completed",
        },
        {
            id: "5",
            type: "received",
            value: "20",
            date: "10-20-2024",
            status: "Completed",
        },
        {
            id: "6",
            type: "received",
            value: "20",
            date: "10-20-2024",
            status: "Completed",
        },
        {
            id: "7",
            type: "received",
            value: "20",
            date: "10-20-2024",
            status: "Completed",
        },
    ]

    return (
        <div className="px-10 py-20 flex flex-col justify-center gap-14">
            <div className="flex flex-col md:justify-between md:items-end md:max-w-500 gap-10">
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
                                2.394,34 R$
                            </CardTitle>
                        </div>

                        <Button className="cursor-pointer">
                            TRANSFERIR DINHEIRO
                        </Button>
                    </Card>
                </header>

                <section className="w-full">
                    <Card className="w-full flex md:flex-col md:justify-between md:items-end md:max-w-500">
                        <h1 className="w-full">
                            Historico de Transação
                        </h1>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead className="w-70">TIPO DE TRANSAÇÃO</TableHead>
                                <TableHead className="w-70">VALOR</TableHead>
                                <TableHead className="w-70">DATA</TableHead>
                                <TableHead>STATUS</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.id}>
                                        <TableCell>{invoice.type}</TableCell>
                                        <TableCell>{invoice.value}</TableCell>
                                        <TableCell>{invoice.date}</TableCell>
                                        <TableCell>{invoice.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </section>
            </div>
        </div>
    );
};
