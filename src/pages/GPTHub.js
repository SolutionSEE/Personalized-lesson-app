import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import menu from '../Assets/Images/menu.png';
import bell from '../Assets/svg/bell.svg';
import clock from '../Assets/svg/clock.svg';
import share from '../Assets/svg/share.svg';
import code from '../Assets/svg/code.png';
import presentation from '../Assets/svg/presentation.png';
import blogcontent from '../Assets/svg/blogcontent.png';
import Image from '../Assets/svg/image.png';
import send from '../Assets/svg/send.svg';
import mic from '../Assets/svg/mic.svg';
import { useNavigate } from 'react-router-dom';

const GPTHub = () => {
	const [active, setActive] = useState(false);
	const navigate = useNavigate();

	const handleNavigateDetail = (path) => {
		navigate(`/gpt-hub/${path}`);
	};

	return (
		<div className='bg-[#363A3D] p-[12px] flex'>
			<Sidebar />
			<div className='lg:w-[calc(100%-312px)] w-full lg:ml-[12px] h-[calc(100vh-24px)] overflow-y-auto '>
				<div className='bg-[#1A1D21CC] sm:p-[24px] p-[12px_14px] rounded-[20px] md:sticky top-0 mb-[40px]'>
					<div className='sm:flex justify-between items-center pb-[5px]'>
						<div className='flex items-start gap-3'>
							<button
								className='lg:hidden mt-[8px]'
								onClick={() => setActive(!active)}
							>
								<img src={menu} alt='menu' className='w-[16px]' />
							</button>
							<div>
								<h1 className='text-[20px] font-bold mb-1 text-white'>
									Edu-Tech Platform
								</h1>
								<p className='text-[#9B9C9E] text-[14px] font-medium'>
									A lesson app that will blow your mind
								</p>
							</div>
						</div>
						<div className='flex md:gap-[44px] gap-[20px] sm:mt-0 mt-[26px]'>
							<div className='flex gap-[10px]'>
								<div className='relative'>
									<img src={bell} alt='bell' />
									<div className='bg-[#FD0606] w-[14px] h-[14px] border-[4px] border-[#131619] rounded-full absolute right-[-8px] top-[-4px]' />
								</div>
								<p className='text-[#686B6E] text-[14px] font-semibold'>Alerts</p>
							</div>
							<div className='flex gap-[10px]'>
								<div className='relative'>
									<img src={clock} alt='clock' />
									<div className='bg-[#4AC97E] w-[14px] h-[14px] border-[4px] border-[#131619] rounded-full absolute right-[-8px] top-[-4px]' />
								</div>
								<p className='text-[#686B6E] text-[14px] font-semibold'>
									Schedule
								</p>
							</div>
							<div className='flex gap-[10px]'>
								<img src={share} alt='share' />
								<p className='text-[#686B6E] text-[14px] font-semibold'>Share</p>
							</div>
						</div>
					</div>
				</div>
				<div className='2xl:pl-[145px] 2xl:pr-[145px]'>
					<h1 className='sm:text-[28px] text-[20px] font-bold text-white'>
						GPT-Hub
					</h1>
					<p className='text-[#9B9C9E] font-medium sm:text-[16px] text-[14px] max-w-2xl lg:mb-[110px] mb-[50px]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Ut porttitor .
					</p>
					<div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-3 items-start mt-[14px]'>
						<div
							onClick={() => handleNavigateDetail('code')}
							className='cursor-pointer bg-[linear-gradient(145deg,_#d7eded29_0%,_#ccebeb00_100%)] p-[20px_15px] border-t-[1px] border-[#ffffff14] rounded-[12px] flex items-center justify-start flex-col min-h-[180px] 2xl:min-h-[170px]'
						>
							<img src={code} alt='Code' />
							<h4 className='text-[#FFFFFF] text-[18px] font-medium mt-[14px]'>
								Code
							</h4>
							<p className='text-[#A8A8A8] text-[12px] font-medium mt-[14px] text-center'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
								porttitor .
							</p>
						</div>
						<div
							onClick={() => handleNavigateDetail('presentation')}
							className='cursor-pointer bg-[linear-gradient(145deg,_#d7eded29_0%,_#ccebeb00_100%)] p-[20px_15px] border-t-[1px] border-[#ffffff14] rounded-[12px] flex items-center justify-start flex-col min-h-[180px] 2xl:min-h-[170px]'
						>
							<img src={presentation} alt='Presentation' />
							<h4 className='text-[#FFFFFF] text-[18px] font-medium mt-[14px]'>
								Presentation
							</h4>
							<p className='text-[#A8A8A8] text-[12px] font-medium mt-[14px] text-center'>
								Lorem ipsum dolor sit amet, consectetur .
							</p>
						</div>
						<div
							onClick={() => handleNavigateDetail('blog')}
							className='cursor-pointer bg-[linear-gradient(145deg,_#d7eded29_0%,_#ccebeb00_100%)] p-[20px_15px] border-t-[1px] border-[#ffffff14] rounded-[12px] flex items-center justify-start flex-col min-h-[180px] 2xl:min-h-[170px]'
						>
							<img src={blogcontent} alt='Blog Content' />
							<h4 className='text-[#FFFFFF] text-[18px] font-medium mt-[14px]'>
								Blog Content
							</h4>
							<p className='text-[#A8A8A8] text-[12px] font-medium mt-[14px] text-center'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
							</p>
						</div>
						<div
							onClick={() => handleNavigateDetail('image')}
							className='cursor-pointer bg-[linear-gradient(145deg,_#d7eded29_0%,_#ccebeb00_100%)] p-[20px_15px] border-t-[1px] border-[#ffffff14] rounded-[12px] flex items-center justify-start flex-col min-h-[180px] 2xl:min-h-[170px]'
						>
							<img src={Image} alt='Image' />
							<h4 className='text-[#FFFFFF] text-[18px] font-medium mt-[14px]'>
								Image
							</h4>
							<p className='text-[#A8A8A8] text-[12px] font-medium mt-[14px] text-center'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className='bg-[#131619] rounded-[20px] py-[10px] relative mt-[49px] lg:mt-[172px] mt-[50px]'>
						<img
							src={mic}
							alt='mic'
							className='absolute top-[10px] sm:left-[24px] left-[6px] '
						/>
						<input
							placeholder='I want to learn about python'
							className='text-[#9B9C9E] bg-transparent w-full outline-none sm:p-[12px_96px] p-[12px_58px]'
						/>
						<img
							src={send}
							alt='send'
							className='absolute top-[10px] sm:right-[24px] right-[6px] '
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default GPTHub;
