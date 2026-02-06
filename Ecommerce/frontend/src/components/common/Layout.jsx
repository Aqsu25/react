import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'

function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout