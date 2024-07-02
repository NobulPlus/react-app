import React from 'react'
import Navbar from '../../layouts/Navbar/Navbar'
import Tagline from '../../components/Tagline/Tagline'
import Product from '../../components/Product/Product'
import Advert1 from '../../components/Advert/Advert1'
import Advert2 from '../../components/Advert/Advert2'
import Newsletter from '../../components/Newsletter/Newsletter'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Tagline/>
      <Product/>
      <Advert1/>
      <Advert2/>
      <Newsletter/>
    </>
  )
}

export default Home