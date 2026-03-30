import type { ItransferBalanceParams, ItransferBalanceResponse } from "../services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transferBalance } from "../services";
import { useAuthStore } from "@/stores/authStore";


export const useTransfer = () => {
    const queryClient = useQueryClient();
    const {token} = useAuthStore();

    return useMutation<ItransferBalanceResponse, Error, Omit<ItransferBalanceParams, "token">>({
        mutationFn: ({amount}) => transferBalance({amount, token: token || ""}),
        onError: (error: Error) => {
            console.error("Erro na transferência:", error);
            alert(error.message);
        },

        onSuccess: (data) => {
            console.log("Transferência realizada:", data);
            alert("Transferencia realizada com sucesso");

            queryClient.invalidateQueries({ queryKey: ["transactions"] });
            queryClient.invalidateQueries({ queryKey: ["balance"] });
        },
    });
};
