import React from 'react';
import { motion } from 'framer-motion';
import '../About.scss';
const AnimatedCircles2 = ({title, isHovered }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" style={{ backgroundColor: "#c2DAC6" }}>
    <motion.ellipse
        cx="50"  // Adjusted the x-coordinate
        cy="25"  // Adjusted the y-coordinate
        rx="40"  // Radius for x-axis
        ry="30"  // Radius for y-axis
        fill="#96c79c"
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


    );
}

export default AnimatedCircles2;
