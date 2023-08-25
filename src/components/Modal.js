import React from 'react';
import { GrClose } from 'react-icons/gr';

const Modal = ({ open, onClose, content }) => {
	return (
		<div
			className={`${open ? 'block' : 'hidden'} relative z-10`}
			aria-labelledby='modal-title'
			role='dialog'
			aria-modal='true'
		>
			<div className='fixed inset-0 bg-[#060708A3] bg-opacity-75 backdrop-blur-[4px]'></div>

			<div className='fixed inset-0 z-10 overflow-y-auto shadow-glass-modal rounded-2xl'>
				<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
					{/* style modal start here */}
					<div className='relative transform overflow-auto rounded-lg bg-[#363A3D] shadow-xl transition-all sm:my-8 sm:w-fit py-3 px-2 sm:px-5 min-[911px]:min-w-[911px]'>
						<div className='flex justify-end'>
							<GrClose
								className='text-[#686B6E] w-5 h-5 cursor-pointer'
								onClick={onClose}
							/>
						</div>

						<div>{content}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
