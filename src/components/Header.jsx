import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { IoOpenOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import logoImg from "../assets/logo.png"

const Header = ({appState, setAppState}) => {
    const links = appState?.links
    const openMenu = ()=>{
        setAppState((prev)=>{
            return ({
                ...prev,
                showMenu: true,
            })
        })
    }
    return (
    <>
        <header className='header'>
            <div className='nav-bar'>
                <div className='logo'>
                    <img src={logoImg} width={50} alt='' />
                </div>
                <div className='links-holder'>
                    {links?.map((link, index)=>{
                        return (
                            <button className='header-btn' key={index}>
                                {link?.title}
                            </button>
                        )
                    })}
                </div>
                {/* <div className='actions'>
                    <a href='https://x.com/isaacadxbayo' target="_blank" className='btn filled'>
                        Wiki <IoOpenOutline />
                    </a>
                    <a target="_blank" className='link-round' href='https://github.com/tertiux'>
                        <FaGithub />
                    </a>
                </div> */}
                <button className='hamburger' onClick={openMenu}>
                    <HiMenuAlt3 />
                </button>
            </div>
        </header>
    </>
  )
}

export default Header