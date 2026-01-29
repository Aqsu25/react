import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Layout() {
    return (
        <div>
            <Navbar />
            <main className='pt-5 mt-5'
            ><Outlet /></main>
            <Footer />
        </div>
    )
}

export default Layout