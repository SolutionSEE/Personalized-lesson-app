import React from 'react';

const Button = ({ text, bgColor, color, onClick, className, ...props }) => {
	return (
		<button
			onClick={onClick}
			className={` ${className} ${bgColor ? bgColor : 'bg-[#B6F09C]'} ${
				color ? 'text-[#EAEBF8]' : 'text-[#0C1132]'
			} h-12 py-2 px-6 w-fit rounded-lg font-semibold whitespace-nowrap`}
		>
			{text || props.children}
		</button>
	);
};

export default Button;
