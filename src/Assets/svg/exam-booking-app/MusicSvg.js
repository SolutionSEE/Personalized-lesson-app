import React from 'react';

export function MusicSvg(props) {
	const { className, fill } = props;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='36'
			viewBox='0 0 24 36'
			fill='none'
			className={className}
		>
			<g clipPath='url(#clip0_1_929)'>
				<path
					d='M7.49999 36C5.39999 36 3.61999 35.27 2.16999 33.82C0.71999 32.37 -0.0100098 30.59 -0.0100098 28.49C-0.0100098 26.39 0.71999 24.61 2.16999 23.16C3.61999 21.71 5.39999 20.98 7.49999 20.98C8.42999 20.98 9.27999 21.11 10.03 21.38C10.78 21.65 11.44 22.01 12.01 22.48V0H23.71V6.75H15V28.5C15 30.6 14.27 32.38 12.82 33.83C11.37 35.28 9.58999 36.01 7.48999 36.01L7.49999 36Z'
					fill={fill ? fill : '#0F9F74'}
				/>
			</g>
		</svg>
	);
}
