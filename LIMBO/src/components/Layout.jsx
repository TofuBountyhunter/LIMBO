import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from './MainNavbar'
const Layout = () => {
    return (
        <>
            <div className='scroll-smooth dark'>
                <MainNavbar></MainNavbar>
                <Outlet></Outlet>
            </div>

        </>
    )
}

export default Layout
