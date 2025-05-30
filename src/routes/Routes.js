import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import ServiceDetail from '../pages/ServiceDetail';
import PlanDetail from '../pages/PlanDetail';

import PrivateRoute from './PrivateRoute';
import MainLayout from './MainLayout';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />

      {/* Pages protégées avec Navbar */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <MainLayout>
              <Home />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/shop"
        element={
          <PrivateRoute>
            <MainLayout>
              <Shop />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/services/:slug"
        element={
          <PrivateRoute>
            <MainLayout>
              <ServiceDetail />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/website-plans/:type"
        element={
          <PrivateRoute>
            <MainLayout>
              <PlanDetail />
            </MainLayout>
          </PrivateRoute>
        }
      />

      {/* Route par défaut */}
      <Route path="*" element={<Navigate to="/login" replace />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  );
};

export default AppRoutes;



