import React from 'react'
import logoImg from "../assets/logo.png"
import { FaDiscord, FaTelegram, FaTelegramPlane, FaTwitter } from 'react-icons/fa'

const Head = () => {
  return (
    <>
        <section className='head--section'>
            <div className='heading'>
                <h1>
                    <p>SOLANA IS KING</p>
                    <small className='fancy-text'>
                        ($<span>SIK</span>)
                    </small> 
                </h1>
                <img src={logoImg} alt='' width={70} />
            </div>

            <div className='summary'>
                <p className='caps'>
                    embracing the reign of solana on the blockchain throne
                </p>
            </div>
            
            <div className='token--overview'>
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

                <div className='labelled'>
                    <div className='content'>
                        <p className='label'>
                            Token Overview
                        </p>
                        <div className='details  x'>
                            <p>
                                SolanaIsKing ($SIK) a meme token on solana to celebrate solana as the best blockchain ever and as the king of all blockchain, with unparalleled supremacy.
                            </p>
                        </div>
                    </div>

                    <div className='content'>
                        <p className='label'>
                            Purpose and Utility
                        </p>
                        <div className='details'>
                            <p>
                                $SIK will be integrated into DApps, across the entire network and serve a unit of account and user participation rewards.
                            </p>
                        </div>
                    
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default Head