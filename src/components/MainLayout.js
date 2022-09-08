import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


function SharedLayout() {
    return (
        <div className='main-container'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default SharedLayout;



