import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import '../Index.css'
import Footer from '../components/footer/Footer'
import Center from '../components/center/Center'
const MainLayout = () => {

  return (
    <div className='container'  >
      <Header/>
      <Outlet/>
      <Center/>
      <Footer/>
    </div>
  )
}

export default MainLayout