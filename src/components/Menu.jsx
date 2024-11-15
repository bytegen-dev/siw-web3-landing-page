import React from 'react'
import { FaDiscord, FaGithub, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoClose, IoOpenOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Menu = ({appState, setAppState}) => {
    const closeMenu = ()=>{
        setAppState((prev)=>{
            return ({
                ...prev,
                showMenu: false,
            })
        })
    }
    const links = appState?.links
    return (
    <>
        <div className='backdrop' onClick={closeMenu}></div>
        <menu className='menu'>
            <button className='close-btn' onClick={closeMenu}>
                <div className='pop-circle'></div>
                <IoClose />
            </button>
            {/* <div className='actions'>
                <a href='https://x.com/isaacadxbayo' target="_blank" className='btn filled'>
                    Wiki <IoOpenOutline />
                </a>
                <a target="_blank" className='link-round' href='https://github.com/tertiux'>
                    <FaGithub />
                </a>
            </div> */}
            <div className='links-holder'>
                <div className='links'>
                    {links?.map((link, index)=>{
                        return (
                            <NavLink to={link?.to} className='menu-btn' key={index} style={{
                                transitionDelay: appState?.showMenu ? `${(index * 0.2)}s` : "0s"
                            }} onClick={closeMenu}>
                                {link?.title}
                            </NavLink>
                        )
                    })}
                </div>
            </div>
            <div className='bottom-links'>
                    <a href="#" target="_blank">
                        <FaDiscord />
                    </a>
                    <a href="#" target="_blank">
                        <FaXTwitter />
                    </a>
                    <a href="#" target="_blank">
                        <FaTelegramPlane />
                    </a>
                </div>
        </menu>
    </>
  )
}

export default Menu