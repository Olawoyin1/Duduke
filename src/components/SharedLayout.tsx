// import React from 'react'
import { Outlet } from 'react-router'
import MainNavbar from './Navbar'
import ScrollToTop from '../ScrollToTop'
import Footer from './Footer'


const SharedLayout = () => {
  return (
    <div>
        <MainNavbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout