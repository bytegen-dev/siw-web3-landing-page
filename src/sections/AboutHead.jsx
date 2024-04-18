import React from 'react'
import logoImg from "../assets/logo.png"
import { FaDiscord, FaTelegram, FaTelegramPlane, FaTwitter } from 'react-icons/fa'

const AboutHead = () => {
  return (
    <>
        <section className='head--section'>
            <div className='heading'>
                <h1>
                    ABOUT
                    <p>
                    SOLANA IS KING
                    </p>
                </h1>
                <img src={logoImg} className='x' alt='' width={70} />
            </div>

            <div className='summary' style={{
                marginTop: "20px"
            }}>
                <p className='caps'>
                    Meme ProjecT
                </p>
            </div>

        </section>
    </>
  )
}

export default AboutHead