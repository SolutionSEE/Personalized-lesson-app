import React from 'react';

export function CodingSvg(props) {
	const { className, fill } = props;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='40'
			height='25'
			viewBox='0 0 40 25'
			fill='none'
			className={className}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M0 12.1L12 24.1L14.15 21.95L4.3 12.1L14.25 2.15L12.1 0L0 12.1ZM25.75 22.05L27.9 24.2L40 12.1L28 0.1L25.85 2.25L35.7 12.1L25.75 22.05Z'
				fill={fill ? fill : '#FF5A00'}
			/>
		</svg>
	);
}
