import React from 'react';
import { StDescription, StAbout, StImage } from '../style';
import styled from 'styled-components';
//icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {
   return (
      <StServices>
         <StDescription>
            <h2>High <span>quality</span> services</h2>
            <StCards> 
               <StCard>
                  <div className="icon">
                     <img src={clock} alt="clock"/>
                     <h3>Efficient</h3>
                  </div>
                  <p>Lorem Ipsum dolor sit amet.</p>
               </StCard>
               <StCard>
                  <div className="icon">
                     <img src={diaphragm} alt="diaphragm"/>
                     <h3>Diaphragm</h3>
                  </div>
                  <p>Lorem Ipsum dolor sit amet.</p>
               </StCard>
               <StCard>
                  <div className="icon">
                     <img src={teamwork} alt="team work"/>
                     <h3>Team Work</h3>
                  </div>
                  <p>Lorem Ipsum dolor sit amet.</p>
               </StCard>
               <StCard>
                  <div className="icon">
                     <img src={money} alt="Money"/>
                     <h3>Money</h3>
                  </div>
                  <p>Lorem Ipsum dolor sit amet.</p>
               </StCard>
            </StCards>
         </StDescription>
         <StImage>
            <img src={home2} alt="Home2"/>
         </StImage>
      </StServices>
   )
}

const StServices = styled(StAbout) `
   h2{
      padding-bottom: 5rem;
   }
   p{
      width: 70%;
      padding: 2rem 0rem 4rem 0rem;
   }
`;

const StCards = styled.div `
   display: flex;
   flex-wrap: wrap;
`;

const StCard = styled.div `
   flex-basis: 20rem;
   .icon {
      display: flex;
      align-items: center;
      h3{
         background: white;
         margin-left: 1rem;
         color: black;
         padding: 1rem;
      }
   }
`;

export default ServicesSection
