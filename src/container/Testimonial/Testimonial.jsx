import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { HiChevronLeft, HiChevronRight} from 'react-icons/hi'

import {AppWrap, MotionWrap} from '../../wrapper'
import './Testimonial.scss'
import fakeTestimonial from './fakeTestimonial';

const Testimonial = () => {

  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([]) 
  const [currentIndex, setCurrentIndex] = useState(0) 
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
      setTestimonials(fakeTestimonial);
      // setBrands(data);
  }, []);
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <a href={testimonials[currentIndex].link} target='_blank' style={{textDecoration: 'none'}}><h4 className="bold-text">{testimonials[currentIndex].name}</h4></a>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
    </>
  )
}
export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);