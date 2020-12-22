import React from 'react';
import styled from 'styled-components';
import { StAbout } from './../style';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';

import { scrollReveal } from '../animation';

const FaqSection = () => {
	const [element, controls] = useScroll();

	return (
		<StFaq ref={element} animate={controls} initial='hidden' variants={scrollReveal}>
			<AnimateSharedLayout>
				<h2>
					Any Questions <span>FAQ</span>
				</h2>
				<Toggle title='How Do I start?'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit, amet consectetur</p>
						<p>
							adipisicing elit. Esse quam perspiciatis veritatis adipisci maxime consequatur
							fugiat in eligendi accusantium natus sint dolore minus corporis repellat
							aliquid doloribus, consectetur cum explicabo?
						</p>
					</div>
				</Toggle>
				<div className='faq-line'></div>

				<Toggle title='Dayly Schedule'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit, amet consectetur</p>
						<p>
							adipisicing elit. Esse quam perspiciatis veritatis adipisci maxime consequatur
							fugiat in eligendi accusantium natus sint dolore minus corporis repellat
							aliquid doloribus, consectetur cum explicabo?
						</p>
					</div>
				</Toggle>
				<div className='faq-line'></div>

				<Toggle title='Payment methods'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit, amet consectetur</p>
						<p>
							adipisicing elit. Esse quam perspiciatis veritatis adipisci maxime consequatur
							fugiat in eligendi accusantium natus sint dolore minus corporis repellat
							aliquid doloribus, consectetur cum explicabo?
						</p>
					</div>
				</Toggle>
				<div className='faq-line'></div>

				<Toggle title='Which kind of products do we offer?'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit, amet consectetur</p>
						<p>
							adipisicing elit. Esse quam perspiciatis veritatis adipisci maxime consequatur
							fugiat in eligendi accusantium natus sint dolore minus corporis repellat
							aliquid doloribus, consectetur cum explicabo?
						</p>
					</div>
				</Toggle>
				<div className='faq-line'></div>
			</AnimateSharedLayout>
		</StFaq>
	);
};

export default FaqSection;

const StFaq = styled(StAbout)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 2rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;
