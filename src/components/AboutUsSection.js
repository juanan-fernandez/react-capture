import React from 'react'
import home1 from '../img/home1.png'
//styled-components
import styled from 'styled-components';



const AboutUsSection = () => {
   return (
      <StAbout>
         <StDescripcion>
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
         </StDescripcion>
         <StImage>
            <img src={home1} alt="Camera man"/>
         </StImage>
      </StAbout>
   )
}

//styled components
const StAbout = styled.div`
   min-height: 90vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5rem 10rem;
   color: white;
`;

const StDescripcion = styled.div `
   flex: 1;
   padding-right: 5rem;
   h2{
      font-weight: lighter;
   }
`
const StImage = styled.div `
   flex: 1;
   overflow: hidden;
   img{
      height: 100%;
      height: 80vh;
      object-fit: cover;
   }
`

const StHide = styled.div `
   overflow: hidden;
`

export default AboutUsSection

