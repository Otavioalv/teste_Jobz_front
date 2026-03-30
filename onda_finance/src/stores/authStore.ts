import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAuthState {
    token: string | null;
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

export const useAuthStore = create<IAuthState>()(
    persist(
        (set) => ({
            token: null,
            isLoggedIn: false,
            login: (token) => set({ token, isLoggedIn: true }),
            logout: () => set({ token: null, isLoggedIn: false }),
        }),
        
        { name: "auth-storage" }
    )
);
