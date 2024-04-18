import React from 'react'
import logoImg from '../assets/logo.png'

const Preloader = ({showLonger}) => {
  return (
    <>
        <div className='preloader' style={{
          animationDelay: "1.2s"
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