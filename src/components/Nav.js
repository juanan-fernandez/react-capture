import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';


const Nav = () => {
	const {pathname} = useLocation();
   return (
      <StNav>
         <h1><Link id="logo" to="/">Capture</Link></h1>
         <ul>
            <li>
					<Link to='/'>1. About us</Link>
					<StLine transition={{ duration: 0.75 }}
					initial={{ width: "0%" }} 
					animate={{ width: pathname === '/' ? "70%" : "0%" }} />
				</li>
            <li>
					<Link to='/work'>2. Our Work</Link>
					<StLine transition={{ duration: 0.75 }}
            	initial={{ width: "0%" }} 
					animate={{ width: pathname === '/work' ? "70%" : "0%" }} />
				</li>
				
            <li>
					<Link to="/contact">3. Contact Us</Link>
					<StLine transition={{ duration: 0.75 }}
            	initial={{ width: "0%" }} 
					animate={{ width: pathname === '/contact' ? "70%" : "0%" }} />
				</li>
				
         </ul>
      </StNav>
   )
};

const StNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background: #282828;
	position: sticky;
	top: 0;
	z-index: 10;
	a {
		color: white;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
	}
	li {
		padding-left: 10rem;
		position: relative;
	}

   #logo {
		font-size: 2.5rem;
		font-family: 'Lobster', cursive;
		font-weight: lighter;
	}

	@media (max-width: 1200px) {
		flex-direction: column;
		padding: 2rem 1rem;
		#logo {
			display: inline-block;
			margin: 1rem;
		}
		ul {
			padding: 2rem;
			justify-content: space-around;
			width: 100%;
			li {
				padding: 0;
			}
		}
	}

`;

const StLine = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  position: absolute;
  bottom: -60%;
  left: 60%;
  @media (max-width: 1200px) {
    left: 0%;
	 width: 70%;
  }
`;

export default Nav
