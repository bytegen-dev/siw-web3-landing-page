import React from 'react'
import Head from '../sections/Head'
import AboutHead from '../sections/AboutHead'
import AboutContent from '../sections/AboutContent'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <>
        <div className='container about--container'>
            <AboutHead aboutPage={true} />
            <AboutContent />
            <Footer />
        </div>
    </>
  )
}

export default AboutUs