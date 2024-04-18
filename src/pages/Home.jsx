import React from 'react'
import Head from '../sections/Head'
import Tokenomics from '../sections/Tokenomics'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <div className='container home--container'>
            <Head />
            <Tokenomics />
            <Footer />
        </div>
    </>
  )
}

export default Home