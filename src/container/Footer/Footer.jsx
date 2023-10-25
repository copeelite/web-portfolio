import React, {useState, useRef, useEffect} from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { Tooltip } from 'react-tooltip'


import './Footer.scss';
// import { color } from 'framer-motion';
const Footer = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFormValid, setisFormValid] = useState(false)
  const { user_name, user_email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const newFormValid = value.trim() !== '' && (name !== 'user_email' || user_name.trim() !== '') && (name !== 'user_name' || user_email.trim() !== '');
    setisFormValid(newFormValid);
  };

  useEffect(() => {
    setisFormValid(user_name.trim() !== '' && user_email.trim() !== '' && message.trim() !== '');
  }, [user_name, user_email, message]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      console.log("no empty input!!!")
      return;
    }
    setLoading(true);
    emailjs.sendForm('service_jjy3srt', 'template_hieurlp', form.current, 'rWdNuuSjhiwkSX8l6')
      .then((result) => {
          setLoading(false);
          setIsFormSubmitted(true);
      }, (error) => {
          setLoading(false);
      });
  }
  
  return (
    <>
      <h2 className="head-text">Get in touch & chat with me </h2>

      <div className="app__footer-cards">

        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:fmeng18@myseneca.ca" className="p-text">fmeng18@myseneca.ca</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (647) 671-7028" className="p-text">+1 (647) 671-7028</a>
        </div>

      </div>
      {!isFormSubmitted ? (
        <>
        {!isFormValid && (
          <Tooltip
            id="m-tooltip"
            content="Please fill out all the fields :)"
            style={{ color: 'red', backgroundColor: 'white' }}
          >
          </Tooltip>
        )}
        <form className=" app__footer-form app__flex" ref={form} onSubmit={sendEmail}>

            <div className="form-floating app__flex">
              <input  className="form-control p-text" type="text" placeholder="Your Name" name="user_name"
              value={user_name}
              onChange={handleChangeInput}
              />
              <label style={{color:"grey", fontSize:"small"}}>Your Name</label>
            </div>
            <div className="form-floating app__flex">
              <input   className="form-control p-text" type="email" placeholder="Your Email" name="user_email"
              value={user_email}
              onChange={handleChangeInput}
              />
              <label style={{color:"grey", fontSize:"small"}}>Your Email</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control p-text" style={{height:"100px"}}
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={handleChangeInput}
                id="floatingTextarea2"
              />
              <label htmlFor="floatingTextarea2" style={{color:"grey", fontSize:"small"}}>Your Message</label>

            </div>
            <button data-tooltip-id="m-tooltip" disabled={!isFormValid || loading} type="submit" className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>

        </form>

     </>
      ) : (
        
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);