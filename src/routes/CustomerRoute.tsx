import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface CustomerRouteProps {
  children: React.ReactNode;
}

const CustomerRoute: React.FC<CustomerRouteProps> = ({ children }) => {
  const { state } = useAuth();

  // Si no está autenticado, redirigir a login
  if (!state.isAuthenticated || !state.user) {
    return <Navigate to="/login" replace />;
  }

  // Si es ADMIN, redirigir al panel de administración
  if (state.user.role !== 'CUSTOMER') {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
};

export default CustomerRoute;
