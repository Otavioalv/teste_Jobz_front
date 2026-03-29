import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { ITransactionDataType } from "../types";


interface ITransactionHistoryTableProps {
    transactions: ITransactionDataType[]
}

export const TransactionHistoryTable = ({transactions}: ITransactionHistoryTableProps) => {
    return (
        <Card className="w-full flex md:flex-col md:justify-between md:items-end md:max-w-500">
            <h1 className="w-full">
                Historico de Transação
            </h1>

            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-70">TIPO DE TRANSAÇÃO</TableHead>
                    <TableHead className="w-70">VALOR</TableHead>
                    <TableHead>DATA</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                            <TableCell>{transaction.type}</TableCell>
                            <TableCell>{transaction.value}</TableCell>
                            <TableCell>{transaction.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}

