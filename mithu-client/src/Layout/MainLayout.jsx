import React from 'react';
import NavBar from '../sheared/NavBar';
import { Outlet } from 'react-router';
import Footer from '../sheared/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;