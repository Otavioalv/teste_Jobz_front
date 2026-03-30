import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/authStore";
import { fetchLogin } from "../services";

import type { IFetchLoginParams, IFetchLoginResponse } from "../services";

export const useLogin = () => {
    const queryClient = useQueryClient();
    const {login} = useAuthStore();

    return useMutation<IFetchLoginResponse, Error, IFetchLoginParams>({
        mutationFn: fetchLogin,
        
        onError: (error) => {
            console.error("Erro no login: ", error);
            alert(error.message);
        },
        
        onSuccess: (data) => {
            login(data.token);
            alert("Login realizado com sucesso");
            
            queryClient.clear();
            queryClient.invalidateQueries({ queryKey: ["transactions"] });
            queryClient.invalidateQueries({ queryKey: ["balance"] });
        },
    });
};

export const useLogout = () => {
    const queryClient = useQueryClient();
    const { logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        queryClient.clear();
    };

    return { handleLogout };
};
