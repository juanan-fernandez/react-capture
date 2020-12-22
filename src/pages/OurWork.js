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
import { PageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../animation';
//custom hook
import { useScroll } from '../components/useScroll';


const OurWork = () => {
   // const [element, controls] = useScroll();
   const [element2, controls2] = useScroll();
   const [element3, controls3] = useScroll();
   return (
         <StWork style={{background: "#fff"}} variants={PageAnimation} initial="hidden" animate="show" exit="exit">
         <motion.div variants={sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
         </motion.div>
            <StMovie>
               <motion.h2 variants={fade}>The Athlete</motion.h2> 
               <motion.div className="line" variants={lineAnim}></motion.div>
               <Link to='/work/the-athlete'>
                  <StHide>
                     <motion.img variants={photoAnim} src={athlete} alt='Athlete'/>
                  </StHide>
               </Link>
            </StMovie>
            <StMovie variants={fade} initial='hidden' ref={element2} animate={controls2}>
               <h2>The Racer</h2> 
               <motion.div className="line" variants={lineAnim}></motion.div>
               <Link to='/work/the-racer'>
                  <img src={theracer} alt='Racer'/>
               </Link >
            </StMovie>
            <StMovie variants={fade} initial='hidden' ref={element3} animate={controls3} >
               <h2>Good Times</h2> 
               <motion.div className="line" variants={lineAnim}></motion.div>
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
   @media (max-width: 1200px) {
    padding: 2rem 2rem;
  }
   h2{
      padding: 1rem 0rem;
   }
`;

const StMovie  = styled(motion.div) `
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

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork
