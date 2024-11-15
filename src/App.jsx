import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './styles/index.scss'
import Header from './components/Header'
import Menu from './components/Menu'
import Head from './sections/Head'
import Tokenomics from './sections/Tokenomics'
import Footer from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import PageInDevelopment from './pages/PageInDevelopment'
import Preloader from './components/Preloader'

function App() {
  const [appState, setAppState] = useState({
    showMenu: false,
    isScrolled: false,
    links: [
      {
          title: "Home",
          to: "/"
      },
      {
          title: "About Us",
          to: "/about",
      },
      {
          title: "NFTs",
          to: "/sik-art"
      },
      {
          title: "Key Project",
          to: "/key-projects"
      },
      {
          title: "Whitepaper",
          to: "/whitepaper"
      },
    ],
  })

  const location = useLocation()
  const pathname = location?.pathname

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

  const [showPreloader, setShowPreloader] = useState(true)

  useLayoutEffect(()=>{
    const hasVisited = localStorage?.getItem("has-visited")
    if(hasVisited){
      setShowPreloader(false)
    } else{
      localStorage?.setItem("has-visited", true)
      setShowPreloader(true)
    }

  },[appElementRef])
  
  useLayoutEffect(()=>{
    if(appElementRef){
      appElementRef?.current?.scrollTo(0, 0)
    }

    const el = document?.getElementById("logo-btn")
    if(el){
      el.addEventListener("click", ()=>{
        appElementRef?.current?.scrollTo(0, 0)
      })
    }
    
    if(pathname === ""){
      document.title = "Home | SOLANA IS KING"
    } else if(pathname === "/"){
      document.title = "Home | SOLANA IS KING"
    } else if(pathname === "/about"){
      document.title = "About | SOLANA IS KING"
    } else{
      document.title = "SOLANA IS KING"
    }
  },[pathname, appElementRef])

  return (
    <>
      {<Preloader showLonger={showPreloader} appState={appState} setAppState={setAppState} />}
      <div className={`app ${appState?.showMenu ? "show-menu" : ""} ${appState?.pageScrolled ? "is-scrolled" : ""}`} ref={appElementRef}>
        
        <Header appState={appState} setAppState={setAppState} />

        <Menu appState={appState} setAppState={setAppState} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/*' element={<PageInDevelopment />} />
        </Routes>
      </div>
    </>
  )
}

export default App
