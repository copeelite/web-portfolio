import React, {useState, useRef, useEffect} from 'react'
import {HiMenu, HiX} from "react-icons/hi"
import {motion, AnimatePresence} from 'framer-motion'
import {images} from '../../constants'

import './Navbar.scss'
import { BackGroundToggle } from '../'
import { hover } from '@testing-library/user-event/dist/hover'
const Navbar = () => {
  const [isNight, setIsNight] = useState(false);
  
  const toggleBackground = () => {
    setIsNight(!isNight);
  };
  const [toggle, setToggle] = useState(false)
  const dropdownRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setToggle(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        // Cleanup the event listener on component unmount
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);
  return (
    <nav className="app__navbar">
    <div className='app__navbar-logo'>
        <a href="#home">
          <img src={images.logo} alt='logo'/>
        </a>
    </div>
    <ul className='app__navbar-links'> 
    <BackGroundToggle isNight={isNight} toggleBackground={toggleBackground}/>
    </ul>
    
    <ul className='app__navbar-links'>
        
        
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <li className='app__flex p-text nav__part' key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
            </li>
        ))}
        <li className='p-text resume-link'><a href="FanghaoMeng_-_resume.pdf" target="_blank" rel="noopener noreferrer">Resume<span></span><span></span><span></span><span></span></a>
        </li>
    </ul>
    
    <div className='app__navbar-menu'>
          <HiMenu onClick={() => setToggle(true)} />
          <AnimatePresence>
          {
            toggle && (
              <>
              
              <motion.div
              ref={dropdownRef}
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 1000 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}

              >
              <HiX onClick={() => setToggle(false)} />
              <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={`link-${item}`}>
                    <a href={`#${item}`}>{item}</a>
                </li>
              ))}
              <li><a href="FanghaoMeng_-_resume.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">Resume</a></li>
              <li><a className='p-text' style={{cursor: 'pointer'}} onClick={toggleBackground}>{isNight ? "Light" : "Dark"} version</a></li>
              </ul>
              
              </motion.div>
              </>
            )
          }
           </AnimatePresence>
    </div>
    </nav>
    
  )
}

export default Navbar
