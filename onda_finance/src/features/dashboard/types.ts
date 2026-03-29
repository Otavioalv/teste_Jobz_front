export interface ITransactionDataType {
    id: string,
    type: "received" | "transfer",
    value: string,
    date: string,
}