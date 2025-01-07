import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import HomeLayout from '../pages/home/HomeLayout';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<HomeLayout />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;