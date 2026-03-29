import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import DashboardPage from '../features/dashboard/DashboardPage';
import TransferPage from '../features/transfer/TransferPage';



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route 
            path="/" 
            element={<LoginPage />} 
        />
        
        <Route 
            path="/dashboard" 
            element={<DashboardPage />} 
        />
        
        <Route 
            path="/transferencia" 
            element={<TransferPage />} 
        />
      </Routes>
    </BrowserRouter>
  );
}