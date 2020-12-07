import React from 'react'
import { Link } from 'react-router-dom';
//styled
import styled from 'styled-components';
//styled
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';



const OurWork = () => {
   return (
      <StWork>
         <StMovie>
            <h2>The Athlete</h2> 
            <div className="line"></div>
            <Link>
               <img src={athlete} alt='Athlete'/>
            </Link>
         </StMovie>
         <StMovie>
            <h2>The Racer</h2> 
            <div className="line"></div>
            <Link>
               <img src={theracer} alt='Racer'/>
            </Link>
         </StMovie>
         <StMovie>
            <h2>Good Times</h2> 
            <div className="line"></div>
            <Link>
               <img src={goodtimes} alt='Good times'/>
            </Link>
         </StMovie>
      </StWork>
   )
}

const StWork = styled.div `
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
      background: #cccccc;
      margin-bottom: 3rem;
   }

   img{
      width: 100%;
      height: 70vh;
      object-fit: cover;
   }
`;

export default OurWork
