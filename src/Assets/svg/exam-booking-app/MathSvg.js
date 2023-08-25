import React from 'react';

export function MathSvg(props) {
	const { className, fill } = props;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='33'
			height='34'
			viewBox='0 0 33 34'
			fill={fill ? fill : '#FFC909'}
			className={className}
		>
			<path
				d='M20.1179 7.44012H30.9998'
				stroke={fill ? fill : '#FFC909'}
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2 7.44141H12.8819'
				stroke={fill ? fill : '#FFC909'}
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M20.1179 21.9256H30.9998'
				stroke={fill ? fill : '#FFC909'}
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M20.1179 30.9831H30.9998'
				stroke={fill ? fill : '#FFC909'}
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M25.6026 12.867V2'
				stroke={fill ? fill : '#FFC909'}
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2 31.8954L12.8819 21.0284'
				stroke={fill ? fill : '#FFC909'}
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12.8819 31.8954L2 21.0284'
				stroke={fill ? fill : '#FFC909'}
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
