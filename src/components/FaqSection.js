import React from 'react'
import styled from 'styled-components';
import { StAbout } from './../style';
const FaqSection = () => {
   return (
      <StFaq>
         <h2>Any Questions <span>FAQ</span></h2>
         <div className="question">
            <h4>How Do I start?</h4>
            <div className="answer">
               <p>Lorem ipsum dolor sit, amet consectetur</p>
                <p>adipisicing elit. Esse quam perspiciatis veritatis adipisci maxime 
                consequatur fugiat in eligendi accusantium natus sint dolore minus 
                corporis repellat aliquid doloribus, consectetur cum explicabo?</p>
            </div>
            <div className="faq-line"></div>
         </div>
         
         <div className="question">
            <h4>Dayly Schedule</h4>
            <div className="answer">
               <p>Lorem ipsum dolor sit, amet consectetur</p>
                <p>adipisicing elit. Esse quam perspiciatis veritatis adipisci maxime 
                consequatur fugiat in eligendi accusantium natus sint dolore minus 
                corporis repellat aliquid doloribus, consectetur cum explicabo?</p>
            </div>
            <div className="faq-line"></div>
         </div>
         
         <div className="question">
            <h4>Payment methods</h4>
            <div className="answer">
               <p>Lorem ipsum dolor sit, amet consectetur</p>
                <p>adipisicing elit. Esse quam perspiciatis veritatis adipisci maxime 
                consequatur fugiat in eligendi accusantium natus sint dolore minus 
                corporis repellat aliquid doloribus, consectetur cum explicabo?</p>
            </div>
            <div className="faq-line"></div>
         </div>
         
         <div className="question">
            <h4>Which kind of products do we offer?</h4>
            <div className="answer">
               <p>Lorem ipsum dolor sit, amet consectetur</p>
                <p>adipisicing elit. Esse quam perspiciatis veritatis adipisci maxime 
                consequatur fugiat in eligendi accusantium natus sint dolore minus 
                corporis repellat aliquid doloribus, consectetur cum explicabo?</p>
            </div>
            <div className="faq-line"></div>
         </div>
      </StFaq>
   )
}

export default FaqSection

const StFaq = styled(StAbout) `
   display: block;
   span {
      display: block;
   }
   h2 {
      padding-bottom: 2rem;
      font-weight: lighter;
   }
   .faq-line{
      background: #cccccc;
      height: 0.2rem;
      margin: 2rem 0rem;
      width: 100%
   }
   .question {
      padding: 3rem 0rem;
      cursor: pointer;
   }
   .answer {
      padding: 2rem 0rem;
      p{
         padding: 1rem 0rem;
      }
   }
`;