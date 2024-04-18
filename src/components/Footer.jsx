import React from 'react'
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className='links-holder'>
                <a href="#" target="_blank">
                    <FaDiscord />
                    <p>discord</p>
                </a>
                <a href="#" target="_blank">
                    <FaTwitter />
                    <p>twitter</p>
                </a>
                <a href="#" target="_blank">
                    <FaTelegramPlane />
                    <p>telegram</p>
                </a>
            </div>
            <div className='cprt'>
                <p>
                    All Rights Reserved © 2024 Solana Is King
                </p>
            </div>
        </footer>
    </>
  )
}

export default Footer