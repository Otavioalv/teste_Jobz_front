// import de conexão ou conexões com API(s)

import { usersDataList } from "@/stores/mockData";


interface IFetchLoginParams {
    email: string,
    password: string,
}


export const fetchLogin = async ({email, password}: IFetchLoginParams) => {
    try {   
        // SIMULAÇÃO DE CHAMADA DE API E TRATAMENTO 
        await new Promise((r) => setTimeout(r, 1000))

        const user = usersDataList.find(
            (u) => u.email === email && u.password === password
        )

        if(!user) {
            throw new Error("Email ou senha inválidos");
        }

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
        console.error(err);

        alert(`Erro desconhecido`);
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


