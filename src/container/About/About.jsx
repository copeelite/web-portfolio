import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper';
import './About.scss';
import { 
  AnimatedCircles1,
  AnimatedCircles2,
  AnimatedCircles3,
  AnimatedCircles4
} from './index.js';



const abouts = [
  {title: 'Web \n Development', description: 'Use Html, Javascript to Making Websites Interactive', imgUrl: images.about01},
  {title: 'Web \n Design', description: 'Use CSS, SCSS to Create Responsive Design', imgUrl: images.about02},
  {title: 'MERN \n Stack', description: 'Utilize the MERN stack for end-to-end web application development', imgUrl: images.about03},
  {title: 'Data Structures \n & Algorithms ', description: 'Analyze problems to transition from naive solution to optimized one.', imgUrl: images.about04},
]
const About = () => {

  const [isHovered, setIsHovered] = useState([false, false, false, false])
  const SVG_COMPONENTS = {
    AnimatedCircles1,
    AnimatedCircles2,
    AnimatedCircles3,
    AnimatedCircles4,
};
  return (
    <>
    <h2 className="head-text">I Know that <span>Good Dev</span> <br />means <span>Good Business</span></h2>
    <div className='app__profiles'>
        {abouts.map((about, index) => {
            const ComponentName = SVG_COMPONENTS[`AnimatedCircles${index + 1}`];
            return (
                <motion.div 
                    onMouseEnter={() => {
                        const newHoverState = isHovered.map((_, idx) => idx === index);
                        setIsHovered(newHoverState);
                        
                    }}
                    onMouseLeave={() => {
                        setIsHovered(new Array(abouts.length).fill(false));
                    }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    className="app__profile-item"
                    key={index}
                >
                    <ComponentName key={about.id} isHovered={isHovered[index]}  title={about.title}/>
                    <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                </motion.div>
            );
        })}
    </div>
</>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about', "app__whitebg" )