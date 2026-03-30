import { transactionsDataList, usersDataList } from "@/stores/mockData";
import type { ITransactionDataType } from "@/types";


export interface IGetBalanceParams {
    token: string
}
export interface IGetBalanceResponse {
    balance: string
}

export const getBalance = async ({token}: IGetBalanceParams): Promise<IGetBalanceResponse> => {
    try {   
        // exemplo do uso do axios para chamada
        // const response = await api.get("/balance", {
        //      headers: {
        //          Authorization: `Bearer ${token}`,
        //     },
        // });
        // return response.data;

        // SIMULAÇÃO DE CHAMADA DE API E TRATAMENTO 
        await new Promise((r) => setTimeout(r, 1000));

        // simula coleta id na api
        const id = token.replace("mocked-jwt-token-id:", "");
        
        const user = usersDataList.find(
            (u) => u.id === id
        )

        if(!user) {
            throw new Error("Usuario não encontrado");
        }

        return {
            balance: user.balance
        };

    } catch (err) {
        // Fazer tratamento de erro para chamada real da API
        if (err instanceof Error) {
            // Retorna pro react query
            throw err;
        }
        // Retorna pro react query
        throw new Error("Erro desconhecido");
    }
};



export interface IgetTransactionHistoryParams {
    token: string
}

export interface IgetTransactionHistoryResponse {
    transactions: ITransactionDataType[]
}
export const getTransactionHistory = async ({token}: IgetTransactionHistoryParams): Promise<IgetTransactionHistoryResponse> => {
    try {   
        // exemplo do uso do axios para chamada
        // const response = await api.get("/transactions", {
        //      headers: {
        //          Authorization: `Bearer ${token}`,
        //     },
        // });
        // return response.data;

        // SIMULAÇÃO DE CHAMADA DE API E TRATAMENTO 
        await new Promise((r) => setTimeout(r, 1000));

        // simula coleta id na api
        const id = token.replace("mocked-jwt-token-id:", "");
        
        const transactions = transactionsDataList.filter(
            (transaction) => transaction.userId === id
        );

        if(!transactions) {
            throw new Error("Usuario não encontrado");
        }

        return {
            transactions
        };

    } catch (err) {
        // Fazer tratamento de erro para chamada real da API
        if (err instanceof Error) {
            // Retorna pro react query
            throw err;
        }
        // Retorna pro react query
        throw new Error("Erro desconhecido");
    }
}
