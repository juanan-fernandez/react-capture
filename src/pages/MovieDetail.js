import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
//data
import { MovieState } from './../movieState';
//style
import styled from 'styled-components';
//animations
import { motion } from 'framer-motion';
import { PageAnimation } from '../animation';




const MovieDetail = () => {
   const history = useHistory();
   const url = history.location.pathname;
   const [movies, setMovies] = useState(MovieState);
   const [movie, setMovie] = useState(null);

   useEffect(()=>{
      const [currentMovie] = movies.filter((stateMovie) => {
         return stateMovie.url === url
      });
      setMovie(currentMovie);
   }, [movies, url])

   return (
      <motion.div variants={PageAnimation} initial="hidden" animate="show" exit="exit">
         {movie && (
            <StDetails>
               <StHeadLine>
                  <h2>{movie.title}</h2>
                  <img src={movie.mainImg} alt={movie.title}/>
               </StHeadLine>
               <StAwards>
                  {movie.awards.map((aw) => (
                        <Award title={aw.title} description={aw.description}/>)
                     ) 
                  }
               </StAwards>
               <StImageDisplay>
                  <img src={movie.secondaryImg} alt={movie.title}/>
               </StImageDisplay>
            </StDetails>
         )}
      </motion.div>
   )
}

//Award component
const Award = ({title, description}) => {
   
   return (
      <StAward>
         <h3>{title}</h3>
         <div className="line"></div>
         <p>{description}</p>
      </StAward>
   )
}

const StDetails = styled.div `
   color: white;
`;

const StHeadLine = styled.div `
   min-height: 90vh;
   position: relative;
   padding-top: 20vh;
   h2{
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%)
   }
   img{
      width: 100%;
      height: 70vh;
      object-fit: cover;
   }
`;

const StAwards = styled.div `
   min-height: 20vh;
   display: flex;
   margin: 1rem 10rem;
   align-items: center;
   justify-content: center;
`;

const StAward = styled.div `
   padding: 5rem;
   h3 {
      font-size: 2rem;
   }
   .line {
      width: 50%;
      background: #23d997;
      height: 0.5rem;
      margin: 1rem 0rem;
   }

   p{
      padding: 1rem 0rem;
   }
`;

const StImageDisplay = styled.div `
   min-height: 50vh;
   img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
   }
`;


export default MovieDetail
