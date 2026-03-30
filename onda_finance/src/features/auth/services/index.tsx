// import de conexão(es) com API(s)
// import { api } from "@/services/financeAPI";

import type { IUser } from "@/types";

// dados de mock
import { usersDataList } from "@/stores/mockData";


export interface IFetchLoginParams {
    email: string,
    password: string,
}

export interface IFetchLoginResponse {
    token: string,
    user: Omit<IUser, "password">,
}


export const fetchLogin = async ({email, password}: IFetchLoginParams): Promise<IFetchLoginResponse> => {
    try {   
        // SIMULAÇÃO DE CHAMADA DE API E TRATAMENTO 
        await new Promise((r) => setTimeout(r, 1000))

        const user = usersDataList.find(
            (u) => u.email === email && u.password === password
        )

        if(!user) {
            throw new Error("Email ou senha inválidos");
        }

        // possivel chamada axios 
        // const response = await api.post("/login", {
        //     email,
        //     password,
        // });

        return {
            token: `mocked-jwt-token-id:${user.id}`,
            user: {
                id: user.id,
                email: user.email,
                balance: user.balance,
            },
        };

    } catch (err) {
        // Fazer tratamento de erro para chamada real da API
        if (err instanceof Error) {
            alert(err.message);
            // Retorna pro react query
            throw err;
        }
        // Retorna pro react query
        throw new Error("Erro desconhecido");
    }
};

// LOGOUT CASO SEJA COOKIE HTTPONLY
export const fetchLogout = async () => {
    try {
        console.log("Fazer logout, caso seja cookie httponly");
    }catch(err) {
        console.log(err);
    }
};


