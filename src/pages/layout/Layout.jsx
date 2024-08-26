import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
const Layout = () => {
  return (
      <div>
        <Header/>
        <main className='container mx-auto px-5'>
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout 