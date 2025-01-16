import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import HomeLayout from '../pages/home/HomeLayout';
import PrivateRoutes from './PrivateRoutes';
import LoginPage from '../pages/login/LoginPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage />} />


                <Route element={<PrivateRoutes />}>

                    <Route element={<Layout />} >
                        <Route path="/" element={<HomeLayout />} />
                    </Route>
                </Route>

            </Routes>
        </Router>
    );
};

export default AppRoutes;