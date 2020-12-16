import React from 'react'
import { Link } from 'react-router-dom';
//styled
import styled from 'styled-components';
//images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//animations
import { motion } from 'framer-motion';
import { PageAnimation, fade, photoAnim, lineAnim } from '../animation';


const OurWork = () => {
   return (
      <StWork style={{background: "#fff"}} variants={PageAnimation} initial="hidden" animate="show" exit="exit">
         <StMovie>
            <motion.h2 variants={fade}>The Athlete</motion.h2> 
            <div className="line" variants={lineAnim}></div>
            <Link to='/work/the-athlete'>
               <StHide>
                  <motion.img variants={photoAnim} src={athlete} alt='Athlete'/>
               </StHide>
            </Link>
         </StMovie>
         <StMovie>
            <h2>The Racer</h2> 
            <div className="line"></div>
            <Link to='/work/the-racer'>
               <img src={theracer} alt='Racer'/>
            </Link >
         </StMovie>
         <StMovie>
            <h2>Good Times</h2> 
            <div className="line"></div>
            <Link to='/work/good-times'>
               <img src={goodtimes} alt='Good times'/>
            </Link>
         </StMovie>
      </StWork>
   )
}

const StWork = styled(motion.div) `
   /*background: #fff;*/
   min-height: 100vh;
   overflow: hidden;
   padding: 5rem 10rem;
   h2{
      padding: 1rem 0rem;
   }
`;

const StMovie  = styled.div `
   padding-bottom: 10rem;
   .line{
      height: 0.5rem;
      background: #23dd97;
      margin-bottom: 3rem;
   }

   h2{
      font-size: 2rem;
      color: #242424;
   }

   img{
      width: 100%;
      height: 70vh;
      object-fit: cover;
   }
`;

const StHide = styled.div`
   overflow: hidden;
`;

export default OurWork
