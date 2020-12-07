import React from 'react'
import home1 from '../img/home1.png'
//styled-components
import styled from 'styled-components';
import { StAbout, StHide, StImage, StDescription } from './../style';


const AboutUsSection = () => {
   return (
      <StAbout>
         <StDescription>
            <div className="title">
               <StHide>
                  <h2>We work to make</h2>
               </StHide>
               <StHide>
                  <h2>to make your <span>dreams</span></h2>
               </StHide>
               <StHide>
                  <h2>come true</h2>
               </StHide>
            </div>
            <p>Contact us for any photography or videography ideas that you have</p>
            <button>Contact Us</button>
         </StDescription>
         <StImage>
            <img src={home1} alt="Camera man"/>
         </StImage>
      </StAbout>
   )
}

export default AboutUsSection

