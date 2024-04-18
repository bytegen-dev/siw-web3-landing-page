import { useEffect, useRef, useState } from 'react'
import './styles/index.scss'
import Header from './components/Header'
import Menu from './components/Menu'
import Head from './sections/Head'
import Tokenomics from './sections/Tokenomics'
import Footer from './components/Footer'

function App() {
  const [appState, setAppState] = useState({
    showMenu: false,
    isScrolled: false,
    links: [
      {
          title: "SIK Art",
      },
      {
          title: "About Us",
      },
      {
          title: "Key Project",
      },
      {
          title: "Whitepaper",
      },
    ],
  })

  const appElementRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (appElementRef.current.scrollTop > 30) {
        setAppState((prev)=>{
          return ({
            ...prev,
            pageScrolled: true
          })
        });
      } else {
        setAppState((prev)=>{
          return ({
            ...prev,
            pageScrolled: false
          })
        });
      }
    };

    appElementRef.current.addEventListener('scroll', handleScroll);

    return () => {
      appElementRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [appElementRef]);

  return (
    <>
      <div className={`app ${appState?.showMenu ? "show-menu" : ""} ${appState?.pageScrolled ? "is-scrolled" : ""}`} ref={appElementRef}>
        
        <Header appState={appState} setAppState={setAppState} />

        <Menu appState={appState} setAppState={setAppState} />

        <div className='container'>
          <Head />
          <Tokenomics />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
