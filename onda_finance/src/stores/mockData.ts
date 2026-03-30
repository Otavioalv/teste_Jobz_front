import type { ITransactionDataType, IUser } from "@/types";


export const usersDataList:IUser[] = [
    {
        id: "4",
        email: "otavio@gmail.com",
        password: "Otavio@padrao12",
        balance: "3000.12"
    },
    {
        id: "2",
        email: "tiago@gmail.com",
        password: "Tiago@padrao12",
        balance: "2300.12"
    },
    {
        id: "11",
        email: "juliana@gmail.com",
        password: "Juliana@padrao12",
        balance: "4932.12"
    },

];

export const transactionsDataList: ITransactionDataType[] = [
    { id: "1", type: "received", value: "150.00", date: "2026-03-28", userId: "4" },
    { id: "2", type: "transfer", value: "300.50", date: "2026-03-27", userId: "2" },
    { id: "3", type: "received", value: "50.00", date: "2026-03-26", userId: "11" },
    { id: "4", type: "transfer", value: "120.75", date: "2026-03-25", userId: "4" },
    { id: "5", type: "received", value: "200.00", date: "2026-03-24", userId: "2" },
    { id: "6", type: "transfer", value: "500.00", date: "2026-03-23", userId: "11" },
    { id: "7", type: "received", value: "80.25", date: "2026-03-22", userId: "4" },
    { id: "8", type: "transfer", value: "220.10", date: "2026-03-21", userId: "2" },
    { id: "9", type: "received", value: "330.00", date: "2026-03-20", userId: "11" },
    { id: "10", type: "transfer", value: "75.50", date: "2026-03-19", userId: "4" },
    { id: "11", type: "received", value: "450.00", date: "2026-03-18", userId: "2" },
    { id: "12", type: "transfer", value: "15.00", date: "2026-03-17", userId: "11" },
    { id: "13", type: "received", value: "1000.00", date: "2026-03-16", userId: "4" },
    { id: "14", type: "transfer", value: "250.00", date: "2026-03-15", userId: "2" },
    { id: "15", type: "received", value: "60.00", date: "2026-03-14", userId: "11" },
    { id: "16", type: "transfer", value: "85.40", date: "2026-03-13", userId: "4" },
    { id: "17", type: "received", value: "125.00", date: "2026-03-12", userId: "2" },
    { id: "18", type: "transfer", value: "300.00", date: "2026-03-11", userId: "11" },
    { id: "19", type: "received", value: "45.90", date: "2026-03-10", userId: "4" },
    { id: "20", type: "transfer", value: "210.00", date: "2026-03-09", userId: "2" },
    { id: "21", type: "received", value: "500.00", date: "2026-03-08", userId: "11" },
    { id: "22", type: "transfer", value: "32.00", date: "2026-03-07", userId: "4" },
    { id: "23", type: "received", value: "140.00", date: "2026-03-06", userId: "2" },
    { id: "24", type: "transfer", value: "90.00", date: "2026-03-05", userId: "11" },
    { id: "25", type: "received", value: "220.00", date: "2026-03-04", userId: "4" },
    { id: "26", type: "transfer", value: "110.50", date: "2026-03-03", userId: "2" },
    { id: "27", type: "received", value: "35.00", date: "2026-03-02", userId: "11" },
    { id: "28", type: "transfer", value: "55.00", date: "2026-03-01", userId: "4" },
    { id: "29", type: "received", value: "800.00", date: "2026-02-28", userId: "2" },
    { id: "30", type: "transfer", value: "12.30", date: "2026-02-27", userId: "11" },
    { id: "31", type: "received", value: "190.00", date: "2026-02-26", userId: "4" },
    { id: "32", type: "transfer", value: "400.00", date: "2026-02-25", userId: "2" },
    { id: "33", type: "received", value: "75.00", date: "2026-02-24", userId: "11" },
    { id: "34", type: "transfer", value: "20.00", date: "2026-02-23", userId: "4" },
    { id: "35", type: "received", value: "310.00", date: "2026-02-22", userId: "2" },
    { id: "36", type: "transfer", value: "145.00", date: "2026-02-21", userId: "11" },
    { id: "37", type: "received", value: "600.00", date: "2026-02-20", userId: "4" },
    { id: "38", type: "transfer", value: "88.00", date: "2026-02-19", userId: "2" },
    { id: "39", type: "received", value: "15.50", date: "2026-02-18", userId: "11" },
    { id: "40", type: "transfer", value: "250.00", date: "2026-02-17", userId: "4" },
];
