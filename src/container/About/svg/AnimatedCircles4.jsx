import React from 'react';
import { motion } from 'framer-motion';
import '../About.scss';
const AnimatedCircles4 = ({title, isHovered }) => {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      style={{ backgroundColor: "#d7cffb" }}
    >

      {/* Left Oval */}
      <motion.ellipse
        cx="30%"
        cy="50%"
        rx="25"
        ry="30"  // Making it oval
        fill="#c3b8f8"
        animate={{ scale: isHovered ? 1.2: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Right Oval */}
      <motion.ellipse
        cx="60%"  // Adjusted for position
        cy="50%"
        rx="50"  // 2x the size
        ry="55"  // 2x the size and making it oval
        fill="#b5a7f4"
        opacity="0.7"  // Slight transparency to create overlap effect
        animate={{ scale: isHovered ? 1.2: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* White mask */}
      <rect
        x="0"
        y="0"
        width="200"
        height="200"
        fill="white"
        opacity={isHovered ? 0.5 : 0}
      />

      {/* Text */}
      <text className='bold__text'>
      {
      title.split('\n').map((line, lineIndex) => (
        <tspan key={lineIndex} x="20%" y="50%" dy={`${lineIndex * 1.2}em`}>{line}</tspan>
      ))}
      </text>
    </svg>
    );
}

export default AnimatedCircles4;
