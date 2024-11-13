import React, { useState } from 'react'
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear())
  
  return (
    <>
        <footer className='footer'>
            <div className='links-holder'>
                <a href="https://x.com/bytegen_dev" target="_blank">
                    <FaDiscord />
                    <p>discord</p>
                </a>
                <a href="https://x.com/bytegen_dev" target="_blank">
                    <FaXTwitter />
                    <p>twitter</p>
                </a>
                <a href="https://x.com/bytegen_dev" target="_blank">
                    <FaTelegramPlane />
                    <p>telegram</p>
                </a>
            </div>
            <div className='cprt'>
                <p>
                    All Rights Reserved © {currentYear} Solana Is King
                </p>
            </div>
        </footer>
    </>
  )
}

export default Footer