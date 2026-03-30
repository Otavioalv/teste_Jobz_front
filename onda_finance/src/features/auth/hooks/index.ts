import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/authStore";
import { fetchLogin } from "../services";

import type { IFetchLoginParams, IFetchLoginResponse } from "../services";

export const useLogin = () => {
    const {login} = useAuthStore();

    return useMutation<IFetchLoginResponse, Error, IFetchLoginParams>({
        mutationFn: fetchLogin,
        
        onError: (error) => {
            console.error("Erro no login: ", error);
            alert(error.message);
        },
        
        onSuccess: (data) => {
            console.log("Login: ", data);
            
            login(data.token);
            // Invalidar queries
            //queryClient.invalidateQueries(['user']); 
        },
    });
};
