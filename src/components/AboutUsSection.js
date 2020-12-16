import React from 'react'
import home1 from '../img/home1.png'
//styled-components
import { StAbout, StHide, StImage, StDescription } from './../style';
//framer-motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim} from '../animation';

import Wave from './Wave';



const AboutUsSection = () => {
   return (
      <StAbout>
         <StDescription>
            <motion.div>
               <StHide>
                  <motion.h2 variants={titleAnim}>We work to make</motion.h2>
               </StHide>
               <StHide>
                  <motion.h2 variants={titleAnim}>to make your <span>dreams</span></motion.h2>
               </StHide>
               <StHide>
                  <motion.h2 variants={titleAnim}>come true</motion.h2>
               </StHide>
            </motion.div>
            <motion.p variants={fade}>Contact us for any photography or videography ideas that you have</motion.p>
            <motion.button variants={fade}>Contact Us</motion.button>
         </StDescription>
         <StImage>
            <motion.img variants={photoAnim} src={home1} alt="Camera man"/>
         </StImage>
         <Wave />
      </StAbout>
   )
}

export default AboutUsSection

