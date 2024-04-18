import React from 'react'
import logoImg from '../assets/logo.png'

const Preloader = ({showLonger}) => {
  return (
    <>
        <div className='preloader' style={{
          animationDelay: showLonger ? "5s" : "1.5s"
        }}>
            <div className='icon'>
                <img src={logoImg} alt='' width={100} />
            </div>
            {showLonger && <p>
              $<span>SIK</span>
            </p>}
        </div>
    </>
  )
}

export default Preloader