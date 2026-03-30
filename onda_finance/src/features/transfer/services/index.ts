import { transactionsDataList, usersDataList } from "@/stores/mockData";
import type { ITransactionDataType } from "@/types";

export interface ItransferBalanceParams {
    token: string,
    amount: string,
}

export type ItransferBalanceResponse = ITransactionDataType;

export const transferBalance = async ({amount, token}: ItransferBalanceParams): Promise<ItransferBalanceResponse> => {
    try { 
        // exemplo do uso do axios para chamada
        // const response = await api.post("/transfer",
        //      {
        //          recipient,
        //          amount,
        //      },
        //      {
        //          headers: {
        //              Authorization: `Bearer ${token}`,
        //          },
        //      }
        // );
        // return response.data;

        // SIMULAÇÃO DE CHAMADA DE API E TRATAMENTO 
        await new Promise((r) => setTimeout(r, 1000));

        const id = token.replace("mocked-jwt-token-id:", "");

        const user = usersDataList.find((u) => u.id === id);

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        if (user.balance < amount) {
            throw new Error("Saldo insuficiente");
        }

        const currentBalance = Number(user.balance);
        const transferAmount = Number(amount.replace(",", "."));

        const newBalance = currentBalance - transferAmount;

        user.balance = String(newBalance);
        console.log(user);

        const updtData: ITransactionDataType = {
            date: new Date().toISOString(),
            id: String(transactionsDataList.length + 1),
            type: "transfer",
            userId: id,
            value: amount
        }

        transactionsDataList.push(updtData);

        // RETORNO TOTALMENTE PARA TESTE MOCKUP
        return updtData;
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

