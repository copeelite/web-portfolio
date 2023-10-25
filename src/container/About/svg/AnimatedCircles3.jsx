import React from 'react';
import { motion } from 'framer-motion';
import '../About.scss';
const AnimatedCircles3 = ({title, isHovered }) => {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      style={{ backgroundColor: "#e4ecfd" }}
    >
      {/* First Oval on top left */}
      <motion.ellipse
        cx="20%" 
        cy="20%" 
        rx="40"
        ry="25"
        fill="#c6D4F8"
        animate={{ scale: isHovered ? 1.2: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Second Oval at bottom right */}
      <motion.ellipse
        cx="70%" 
        cy="70%" 
        rx="40"
        ry="25"
        fill="#cddaf9"
        opacity="0.6" // reduced opacity to create the overlapping effect
        animate={{ scale: isHovered ? 1.1: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Third Oval (Outside the Intersection) at bottom right */}
      <motion.ellipse
        cx="80%" 
        cy="75%" 
        rx="40"
        ry="25"
        fill="#cddaf9"
        opacity="0.6" // reduced opacity to create the overlapping effect
        animate={{ scale: isHovered ? 1.1: 1 }}
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

export default AnimatedCircles3;
