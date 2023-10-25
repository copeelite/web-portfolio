import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {AppWrap, MotionWrap} from '../../wrapper'
import { Tooltip} from 'react-tooltip'
import './Skill.scss'
import fakeSkills from './fakeSkill';
import fakeExperience from './fakeExperience';
const Skills = () => {
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])  
useEffect(() => {
    setExperience(fakeExperience)
    setSkills(fakeSkills)
  }, [])
  return (
    <>
    
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {/*  */}
          {experience.map((experience) => (
            <motion.div
              key={experience.id}
              className="app__skills-exp-item"
              
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <React.Fragment key={work.id}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      key={work.id}

                    >
                      <h4 data-tooltip-id={`my-anchor_${work.name}`}
  data-tooltip-content={work.desc} className="bold-text">{work.name}</h4>
                      {/* id={`my-anchor_${work.name}`} */}
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip id={`my-anchor_${work.name}`} className='my-anchor-element' />
                    {/* <Tooltip
                      anchorSelect={`my-anchor_${work.name}`}
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                    >
                      {work.desc}
                    </Tooltip> */}
                  </React.Fragment>
                ))}
                {/*  */}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills', "app__whitebg" )