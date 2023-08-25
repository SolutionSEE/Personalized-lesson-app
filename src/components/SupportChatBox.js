import React from 'react';
import send from '../Assets/svg/send.svg';
import mic from '../Assets/svg/mic.svg';
import PropTypes from 'prop-types';

const propTypes = {
	placeholder: PropTypes.string.isRequired,
};

const SupportChatBox = (props) => {
	return (
		<div className='bg-[#131619] rounded-[20px] flex items-center py-1 px-1 sm:px-6'>
			<img src={mic} alt='mic' className='cursor-pointer' />
			<input
				placeholder={props.placeholder}
				className='text-nobel bg-transparent w-full outline-none sm:p-[12px_24px] p-1'
			/>
			<img src={send} alt='send' className='cursor-pointer' />
		</div>
	);
};

SupportChatBox.propTypes = propTypes;

export default SupportChatBox;
