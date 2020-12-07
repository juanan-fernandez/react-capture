import styled from 'styled-components';

//styled components
export const StAbout = styled.div`
   min-height: 90vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5rem 10rem;
   color: white;
`;

export const StDescription = styled.div `
   flex: 1;
   padding-right: 5rem;
   h2{
      font-weight: lighter;
   }
`
export const StImage = styled.div `
   flex: 1;
   overflow: hidden;
   img{
      height: 100%;
      height: 80vh;
      object-fit: cover;
   }
`

export const StHide = styled.div `
   overflow: hidden;
`;

