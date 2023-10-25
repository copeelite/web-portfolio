import React, {useState} from 'react'
// import { BsDisplay } from 'react-icons/bs';
import './NavigationDots.scss'
const NavigationDots = ({active}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className='container app__navigation' >
        <div id='app_navigation_label' style={{ display: 'flex', flexDirection: 'column', marginRight:'10px'}}>
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
          
           <span key={item + index} style={{ visibility: hoveredIndex === index ? 'visible' : 'hidden', opacity: hoveredIndex === index ? '1' : '0', }}>
           {item}
         </span>
        ))}
        </div>

        <div id='app_navigation_a'  style={{ display: 'flex', flexDirection: 'column'}}>
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
            <a
            href={`#${item}`}
            key={item + index}
            className='app__navigation-dot'
            style={active === item ? {backgroundColor: '#83D8F7'} : {}}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            
          </a>
        ))}</div>
    </div>
  )
}

export default NavigationDots