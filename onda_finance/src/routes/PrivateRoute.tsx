import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";

export function PrivateRoute() {
    const {isLoggedIn} = useAuthStore();
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}
