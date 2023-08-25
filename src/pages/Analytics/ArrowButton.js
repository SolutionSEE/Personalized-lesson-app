import React from 'react';
import arrowSvg from '../../Assets/svg/arrow-right-active.svg';

const ArrowSvg = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='16'
		height='16'
		viewBox='0 0 16 16'
		fill='none'
	>
		<path
			d='M3.02405 8.00871H12.9275'
			stroke='black'
			stroke-width='2.11455'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
		<path
			d='M8.59482 3.46885L12.9276 8.00873L8.59482 12.5486'
			stroke='black'
			stroke-width='2.11455'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);

export default function ArrowButton(props) {
	return (
		<div
			onClick={props.onClick}
			className='flex items-center justify-center rounded-full w-[31px] h-[31px] max-w-[31px] max-h-[31px] min-w-[31px] min-h-[31px] bg-[#EAEBF8]'
		>
			<ArrowSvg />
		</div>
	);
}
