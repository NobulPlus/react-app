import React from 'react'
import Navbar from '../../layouts/Navbar/Navbar'
import Tagline from '../../components/Tagline/Tagline'
import Product from '../../components/Product/Product'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Tagline/>
      <Product/>
    </>
  )
}

export default Home