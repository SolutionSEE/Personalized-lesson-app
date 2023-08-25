import React from 'react';

export default function BoxAnalytics(props) {
	return (
		<div className={`bg-[#1B1D20] rounded-[16px] w-fit ${props.className} `}>
			{props.children}
		</div>
	);
}
