import React, {useEffect } from 'react';
import './BackgroundToggle.scss'
import sunSVG from './switch/sun.svg';
import sunWhiteSVG from './switch/sun-white.svg';
import moonSVG from './switch/moon.svg';
import moonWhiteSVG from './switch/moon-white.svg';
function BackgroundToggle({ isNight, toggleBackground }) {
  
  
  // const [isNight, setIsNight] = useState(false); // Start with day by default
  
  useEffect(() => {
    if (isNight) {
      document.body.classList.add('night');
    } else {
      document.body.classList.remove('night');
    }
  }, [isNight]);
  // const toggleBackground = () => {
  //   setIsNight(!isNight);
  // };
  
  const sunBgImage = isNight ? `url(${sunWhiteSVG})` : `url(${sunSVG})`;
  const moonBgImage = isNight ? `url(${moonWhiteSVG})` : `url(${moonSVG})`;
  return (
    <div className={`switch-wrapper ${isNight ? 'night' : ''}`}>
      <div className="sun" style={{backgroundImage: sunBgImage}}></div>
      <div className="toggle-wrapper">
        <input 
          id="switch" 
          type="checkbox" 
          checked={isNight}
          onChange={toggleBackground} 
        />
        <label htmlFor="switch" id="toggle">Toggle</label>
      </div>
      <div className="moon" style={{backgroundImage: moonBgImage}}></div>
    </div>
  );
}

export default BackgroundToggle;
