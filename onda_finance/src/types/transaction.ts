export interface ITransactionDataType {
    id: string,
    userId: string,
    type: "received" | "transfer",
    value: string,
    date: string,
}
