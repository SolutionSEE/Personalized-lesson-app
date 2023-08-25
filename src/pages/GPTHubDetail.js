import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import menu from '../Assets/Images/menu.png';
import bell from '../Assets/svg/bell.svg';
import clock from '../Assets/svg/clock.svg';
import share from '../Assets/svg/share.svg';
import blogcontent from '../Assets/svg/blogcontent.png';
import Image from '../Assets/svg/image.png';
import alertCircle from '../Assets/svg/alert-circle.svg';
import alertCircleBlack from '../Assets/svg/alert-circle-black.svg';
import TabPanel from '../components/TabPanel';

import codeSvg from '../Assets/svg/code_black.svg';
import presentationSvg from '../Assets/svg/presentation.svg';
import glowSvg from '../Assets/svg/Glow.svg';
import BoxMessage from '../components/BoxMessage';
import { useLocation, useNavigate } from 'react-router-dom';
import Notification from '../components/Notification';

const tabPanel = [
	{
		name: 'code',
		startIconSrc: codeSvg,
		amount: 4,
	},
	{
		name: 'presentation',
		startIconSrc: presentationSvg,
	},
	{
		name: 'blog content',
		startIconSrc: blogcontent,
	},
	{
		name: 'image',
		startIconSrc: Image,
	},
];

const messages = [
	{
		type: 'bot',
		time: '11sec now',
		text: [
			'No problem! Here is the updated with C#',
			'int x = 5,',
			'int y = 10; ',
			'int results = x + y; ',
			'Console. WriteLine(result);',
		],
	},
	{
		time: '5 sec ago',
		text: ['Please change with C#'],
		author: 'Tyler Durden',
	},
	{
		type: 'bot',
		time: '11sec now',
		text: ['x = 5', 'y = 10', 'result = x + y', 'print (result)'],
	},
	{
		time: '5 sec ago',
		text: ['I want to calculate x + y in python'],
		author: 'Tyler Durden',
	},
];

const BASE_PATH = '/gpt-hub';

const TAB_MAPPING = {
	[BASE_PATH + '/code']: 0,
	[BASE_PATH + '/presentation']: 1,
	[BASE_PATH + '/blog']: 2,
	[BASE_PATH + '/image']: 3,
};

const GPTHubDetail = () => {
	const [active, setActive] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();
	console.log(location);

	const [currentTabIndex, setCurrentTabIndex] = useState(TAB_MAPPING[location.pathname]);
	const currentTab = tabPanel[currentTabIndex];

	const handleTabChange = (index) => {
		if (index >= 0) {
			setCurrentTabIndex(index);
			const path = Object.keys(TAB_MAPPING).find(
				(item) => TAB_MAPPING[item] === index
			);
			navigate(path);
		} else navigate(BASE_PATH);
	};

	const renderCodeContent = () => {
		return (
			<>
				<div className='flex gap-4 items-center mb-[24px]'>
					<h1 className='sm:text-[28px] text-[20px] font-bold text-white capitalize'>
						{currentTab.name}
					</h1>

					<div className='relative flex items-center justify-center p-[12px] h-[32px] w-[32px] bg-tab rounded-[12px]'>
						<p className='text-secondary font-semibold text-[12px]'>
							{currentTab.amount}
						</p>

						<img
							src={glowSvg}
							alt='glow-icon'
							width={40}
							height={40}
							className='absolute left-[0] bottom-[0] rounded-[12px]'
						/>
					</div>
				</div>

				<div className='flex flex-col gap-[26px]'>
					{messages.map((message, index) => {
						return (
							<div key={'codeMessage' + index}>
								<BoxMessage
									isBot={message.type === 'bot'}
									time={message.time}
									text={message.text}
									author={message.author}
								/>
							</div>
						);
					})}
				</div>

				<div className='bg-[#131619] flex items-center rounded-[20px] px-[6px] sm:px-[24px] py-[4px] mt-[35px]'>
					<img
						src={alertCircle}
						alt='alertCircle'
						className='bg-[#363A3D] rounded-[12px] p-[12px_12px]'
					/>
					<input
						placeholder='What you want to share today?'
						className='text-[#9B9C9E] bg-transparent w-full outline-none py-[12px] ml-[12px] sm:ml-[24px] text-[14px] sm:text-[16px] font-medium '
					/>
					<img
						src={alertCircleBlack}
						alt='alertCircle'
						className='bg-[#C8F4B4] rounded-[12px] p-[12px_12px] text-black'
					/>
				</div>
			</>
		);
	};

	const tabContent = [renderCodeContent()];

	return (
		<div className='bg-[#363A3D] p-[12px] flex'>
			<Sidebar />
			<div className='lg:w-[calc(100%-312px)] w-full lg:ml-[12px] h-[calc(100vh-24px)] overflow-y-auto no-scrollbar '>
				<div className='bg-[#1A1D21CC] sm:p-[24px] p-[12px_14px] rounded-[20px] md:sticky top-0 mb-[40px] sm:pb-[45px]'>
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
									GPT-HUB: <span className='text-[#B6F09C]'>Blog</span>
								</h1>
							</div>
						</div>
						<Notification />
					</div>
					<div className='mt-[30px]'>
						<TabPanel
							tabPanel={tabPanel}
							currentTabIndex={currentTabIndex}
							onTabChange={(index) => handleTabChange(index)}
						/>
					</div>
				</div>

				<div className='2xl:pl-[34px] 2xl:pr-[81px]'>
					{tabContent[currentTabIndex]}
				</div>
			</div>
		</div>
	);
};
export default GPTHubDetail;
