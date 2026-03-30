import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import DashboardPage from '@/features/dashboard/DashboardPage';
import TransferPage from '@/features/transfer/TransferPage';
import LoginPage from '@/features/auth/LoginPage';
import { PrivateRoute } from './PrivateRoute';






export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route
            path="/"
            element={
                <Navigate to="/login" />
            }
        />
        
        <Route 
            path="/login" 
            element={<LoginPage />} 
        />


        <Route 
          element={<PrivateRoute/>}
        >
            <Route 
                path="/dashboard" 
                element={<DashboardPage />} 
            />
            
            <Route 
                path="/transferencia" 
                element={<TransferPage />} 
            />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
