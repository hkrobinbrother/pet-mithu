import React from 'react';
import NavBar from '../sheared/NavBar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../sheared/Footer';

const MainLayout = () => {
    const location = useLocation();

    
    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signUp");

    return (
        <div>
           
            {!noHeaderFooter && <NavBar />}
            
            <div>
                <Outlet />
            </div>
            
                       {!noHeaderFooter && <Footer />}
        </div>
    );
};

export default MainLayout;