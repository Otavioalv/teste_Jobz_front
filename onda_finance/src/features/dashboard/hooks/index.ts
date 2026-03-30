import { useQuery } from "@tanstack/react-query";
import { getBalance, getTransactionHistory } from "../services";
import { useAuthStore } from "@/stores/authStore";

export const useGetBalance = () => {
    const {token} = useAuthStore();

    return useQuery({
        queryKey: ["balance", token],
        queryFn: () => getBalance({token: token || ""}),
        enabled: !!token,
    });
};

export const useGetTransactionHistory = () => {
    const {token} = useAuthStore();

    // Se houver paginação, adaptar para (useInfiniteQuery)
    return useQuery({
        queryKey: ["transactions", token],
        queryFn: () => getTransactionHistory({ token: token || "" }),
        enabled: !!token,
    })
}

