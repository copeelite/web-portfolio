import React from 'react';
import { motion } from 'framer-motion';
import '../About.scss';

const AnimatedCircles1 = ({title, isHovered }) => {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" style={{ backgroundColor: "#FFFCD4" }}>
        
        <defs>
          
          <mask id="primaryMask">
            <rect width="100%" height="100%" fill="white"/>
            <motion.circle
              cx="100"
              cy="115"
              r="45"
              fill="black"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </mask>
      </defs>
      {/* Primary Circle */}
      <motion.circle
          cx="100"
          cy="115"
          r="45"
          fill="#fbebbf"
          animate={{ scale: isHovered ? 1.2: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      

      {/* Secondary Circle for Intersection Color */}
      <motion.circle
          cx="135"
          cy="105"
          r="40"
          fill="#ede7d8"
          animate={{ scale: isHovered ? 1.2: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Secondary Circle with Mask */}
      <motion.circle
          cx="135"
          cy="105"
          r="40"
          fill="#edf1e8"
          mask="url(#primaryMask)"
          animate={{ scale: isHovered ? 1.2: 1 }}

          transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <rect
        x="0"
        y="0"
        width="200"
        height="200"
        fill="white"
        opacity={isHovered ? 0.5 : 0} // 0.5 opacity when hovered, 0 (fully transparent) otherwise
      />
       <text className='bold__text'>
      {
      title.split('\n').map((line, lineIndex) => (
        <tspan key={lineIndex} x="20%" y="50%" dy={`${lineIndex * 1.2}em`}>{line}</tspan>
      ))}
      </text>
      
  </svg>
  </>
    );
}

export default AnimatedCircles1;
