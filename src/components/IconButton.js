import React from 'react';
import PropType from 'prop-types';

const propType = {
	icon: PropType.any.isRequired,
	text: PropType.string,
	className: PropType.string,
	positionText: PropType.oneOf(['left', 'right', 'bottom', 'top']),

	onClick: PropType.func.isRequired,
};

const IconButton = ({ positionText, icon, text, className = '', onClick }) => {
	const flex =
		positionText === 'top'
			? 'flex flex-col-reverse'
			: positionText === 'bottom'
			? 'flex flex-col'
			: positionText === 'left'
			? 'flex flex-row-reverse'
			: 'flex';

	return (
		<div
			onClick={onClick}
			className={` ${className} ${flex} relative cursor-pointer gap-1 items-center justify-self-start`}
		>
			<div>{icon}</div>
			{text && (
				<p
					className={`capitalize text-[14px] font-semibold leading-5 text-primary-light `}
				>
					{text}
				</p>
			)}
		</div>
	);
};

IconButton.propType = propType;

export default IconButton;
