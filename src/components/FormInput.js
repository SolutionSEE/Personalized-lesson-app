import React from 'react';

const FormInput = ({ type, label, placeholder, ...rest }) => {
	return (
		<div className='flex flex-col'>
			<label className='text-[#9B9C9E] text-sm mb-3'>{label}</label>
			<input
				{...rest}
				type={type}
				placeholder={placeholder}
				className='bg-[#1A1D21] text-white placeholder-[#363A3D] rounded-lg px-4 h-12  border border-[#363A3D]'
			/>
		</div>
	);
};

export default FormInput;
