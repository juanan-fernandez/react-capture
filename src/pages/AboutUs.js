import React from 'react'
import AboutUsSection from '../components/AboutUsSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from './../components/ServicesSection';
//animations
import { motion } from 'framer-motion';
import { PageAnimation } from './../animation';

function AboutUs() {
   return (
      <motion.div variants={PageAnimation} initial="hidden" animate="show" exit="exit">
         <AboutUsSection />
         <ServicesSection />
         <FaqSection />
      </motion.div>
   )
}

export default AboutUs
