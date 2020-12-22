import React from 'react'

//animations
import { motion } from 'framer-motion';
import { PageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';

const ContactUs = () => {
   return (
      <StContactStyle style={{background: "#fff"}} variants={PageAnimation} initial="hidden" animate="show" exit="exit">
         <StTitle>
            <StHide>
               <motion.h2 variants={titleAnim}>Contact Us</motion.h2>
            </StHide>
         </StTitle>
         <div>
            <StHide>
               <StSocial variants={titleAnim}>
                  <StCircle/>
                     <h2>Send Us A Message</h2>
               </StSocial>
            </StHide>
            <StHide>
               <StSocial variants={titleAnim}>
                  <StCircle />
                     <h2>Send An Email</h2>
               </StSocial>
            </StHide>
            <StHide>
               <StSocial variants={titleAnim}>
                  <StCircle />
                     <h2>Social Media</h2>
               </StSocial>
            </StHide>
         </div>
      </StContactStyle>
   )
}


const StContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1200px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const StTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1200px) {
    margin-top: 5rem;
  }
`;
const StHide = styled.div`
  overflow: hidden;
`;
const StCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const StSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs