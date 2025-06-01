import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import ForgotPassword from './auth/ForgotPassword';
import Dashboard from './pages/Dashboard';
import WebsitePlanDetail from './pages/WebsitePlanDetail';
import ServiceDetail from './pages/ServiceDetail';
import SubscribeSuccess from './pages/SubscribeSuccess';
import SubscribeCancel from './pages/SubscribeCancel';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';
import PlanDetail from './pages/PlanDetail';
import TermsAndConditions from './pages/TermsAndConditions';
import HelloPage from './pages/HelloPage';
import './i18n';

import PrivateRoute from './auth/PrivateRoute';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Page de bienvenue (choix de langue) */}
        <Route path="/" element={<HelloPage />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Public */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        {/* Protected Pages with Layout */}
        <Route path="/home" element={<PrivateRoute><MainLayout><Home /></MainLayout></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><MainLayout><Dashboard /></MainLayout></PrivateRoute>} />
        <Route path="/shop" element={<PrivateRoute><MainLayout><Shop /></MainLayout></PrivateRoute>} />
        <Route path="/services/:slug" element={<PrivateRoute><MainLayout><ServiceDetail /></MainLayout></PrivateRoute>} />
        <Route path="/website-plans/:type" element={<PrivateRoute><MainLayout><PlanDetail /></MainLayout></PrivateRoute>} />

        {/* Stripe */}
        <Route path="/subscribe-success" element={<SubscribeSuccess />} />
        <Route path="/subscribe-cancel" element={<SubscribeCancel />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;









