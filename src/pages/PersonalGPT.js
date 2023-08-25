import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import menu from '../Assets/Images/menu.png';
import pdfSvg from '../Assets/svg/pdf.svg';
import csvSvg from '../Assets/svg/csv.svg';
import docSvg from '../Assets/svg/doc.svg';
import urlSvg from '../Assets/svg/url.svg';
import deleteSvg from '../Assets/svg/delete.svg';

import pdfSvgDark from '../Assets/svg/pdf-dark.svg';
import csvSvgDark from '../Assets/svg/csv-dark.svg';
import docSvgDark from '../Assets/svg/doc-dark.svg';
import urlSvgDark from '../Assets/svg/url-dark.svg';

import Notification from '../components/Notification';
import TabPanel from '../components/TabPanel';
import { PiUpload } from 'react-icons/pi';
import { FiEdit } from 'react-icons/fi';
import SupportChatBox from '../components/SupportChatBox';
import IconButton from '../components/IconButton';
import BoxMessage from '../components/BoxMessage';

const ICON_MAPPING = {
	PDF: pdfSvgDark,
	csv: csvSvgDark,
	Document: docSvgDark,
	url: urlSvgDark,
};

const OVERAL_DATA = [
	{
		name: 'pdf',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
		image: pdfSvg,
	},
	{
		name: 'csv',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .',
		image: csvSvg,
	},
	{
		name: '.doc',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
		image: docSvg,
	},
	{
		name: 'url',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .',
		image: urlSvg,
	},
];

const VIEW_DATA = [
	{
		content: 'TylersResume',
		type: 'Document',
		status: 'ready',
		date: '08.08.23',
	},
	{
		content: 'WellnessFirm',
		type: 'PDF',
		status: 'ready',
		date: '08.08.23',
	},
	{
		content: 'What is Software',
		type: 'PDF',
		status: 'ready',
		date: '08.08.23',
	},
];

const tabPanel = [
	{
		name: 'view',
		className: 'min-w-[170px] pl-[50px]',
	},
	{
		name: 'create',
		className: 'min-w-[170px] pl-[50px]',
	},
];

const PersonalGPT = () => {
	const [active, setActive] = useState(false);

	const [currentTabIndex, setCurrentTabIndex] = React.useState(-1);
	const [showViewDetail, setShowViewDetail] = React.useState(false);

	const renderOverRal = () => (
		<div className='xl:px-[160px]'>
			<h1 className='sm:text-[28px] text-[20px] font-bold text-white'>Personal GPT</h1>
			<p className='text-[#9B9C9E] font-medium sm:text-[16px] text-[14px] mb-[60px]'>
				Welcome to Personal GPT. Here you can upload content and save it for your
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu sapien,
				finibus et rutrum sit amet, maximus in metus. Morbi rhoncus sed turpis in
				maximus.
			</p>
			<div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-3 items-start mt-[14px]'>
				{OVERAL_DATA.map((item, index) => {
					return <BoxOveral {...item} key={'boxoveral' + index} />;
				})}
			</div>
			<div className='mt-[50px] sm:mt-[110px]'>
				<SupportChatBox placeholder={'You can ask me anything! I am here to help.'} />
			</div>
		</div>
	);

	const renderView = () => {
		return showViewDetail ? (
			renderViewDetail()
		) : (
			<div className='px-1 md:px-9'>
				<div className='overflow-auto no-scrollbar'>
					<div className='w-[1032px] sm:w-full'>
						<div className='grid grid-cols-4'>
							{['content', 'type', 'status', 'date'].map((headerName, idx) => (
								<p
									key={headerName + idx}
									className='text-[22px] font-bold leading-9 text-white capitalize'
								>
									{headerName}
								</p>
							))}
						</div>

						{VIEW_DATA.map((item, idx) => {
							return (
								<div
									key={'viewRow' + idx}
									onClick={() => setShowViewDetail(true)}
									className='grid grid-cols-4 mt-10 items-center bg-glass-fill border-t border-t-glass-stroke p-[18px_20px] rounded-3'
								>
									<p className='text-nobel font-medium text-[18px] -stacked-fractions-[1px] pl-0 xl:pl-12'>
										{item.content}
									</p>

									<div className='flex gap-2 md:gap-3 xl:gap-10 items-center'>
										<img src={ICON_MAPPING[item.type]} alt='icon' />
										<p className='text-nobel text-[18px] font-medium -stacked-fractions-[1px]'>
											{item.type}
										</p>
									</div>

									<div className='bg-stem-green-500 rounded-3 px-6 py-2 font-semibold capitalize text-[16px] leading-8 w-fit'>
										{item.status}
									</div>

									<div className='flex justify-between items-center'>
										<p className='text-nobel text-[18px] font-medium -stacked-fractions-[1px]'>
											{item.date}
										</p>
										<div className='flex gap-2 md:gap-3 xl:gap-10 items-center'>
											<IconButton
												text={'edit'}
												positionText={'bottom'}
												onClick={() => {}}
												icon={
													<FiEdit className='text-stem-green-500 h-6 w-6' />
												}
											/>
											<IconButton
												text={'edit'}
												positionText={'bottom'}
												onClick={() => {}}
												icon={
													<img
														src={deleteSvg}
														alt='delete-icon'
														className='h-6 w-6'
													/>
												}
											/>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className='sm:max-w-[80%] mx-auto mt-[70px]'>
					<SupportChatBox
						placeholder={'You can ask me anything! I am here to help.'}
					/>
				</div>
			</div>
		);
	};

	const renderViewDetail = () => {
		const messages = [
			{
				isBot: false,
				time: '4sec ago',
				author: 'Tyler',
				text: ['What is Software?'],
			},
			{
				isBot: true,
				time: '11sec now',
				text: [
					'Software is a set of instructions, data or programs used to operate computers and execute specific tasks. It is the opposite of hardware, which describes the physical aspects of a computer.',
				],
			},
		];

		return (
			<div className='lg:max-w-[90%]'>
				<p className='text-white font-semibold text-[24px] leading-8 sm:ml-6'>
					Topic Title : What is Software?
				</p>

				<div className='flex flex-col gap-10 mt-9'>
					{messages.map((message, idx) => (
						<div className='' key={'message' + idx}>
							<BoxMessage {...message} fullWidth />
						</div>
					))}
				</div>

				<div className='sm:max-w-[90%] mx-auto mt-[70px] md:mt-[140px]'>
					<SupportChatBox
						placeholder={'You can ask me anything! I am here to help.'}
					/>
				</div>
			</div>
		);
	};

	const renderCreate = () => {
		return (
			<div className='xl:px-[160px]'>
				<BoxTitle
					name={'Topic Title'}
					des={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u'
					}
				/>

				<div className='px-6 bg-nobel-black-700 rounded-3 my-10'>
					<div className='border-r border-nobel-black-600 py-8 flex justify-between pr-4'>
						<p className='font-medium text-[16px] leading-[24px] stacked-fractions-[0.15px] text-nobel-black-100'>
							What is Software?
						</p>
						<p className='font-extrabold text-secondary text-[16px] stacked-fractions-[0.15px]'>
							Use URL
						</p>
					</div>
				</div>

				<BoxTitle
					name={'Upload  Content'}
					className={'mb-6'}
					des={
						'Select which users can access and view this project. Only users with access can view and edit the project.'
					}
				/>

				<div className='flex items-center justify-center w-full'>
					<label
						htmlFor='dropzone-file'
						className='flex flex-col items-center justify-center py-7 w-full cursor-pointer bg-nobel-black-800 rounded-2xl border-2 border-[#938E8E] border-dashed'
					>
						<div className='flex flex-col items-center justify-center'>
							<PiUpload className='w-[50px] h-[50px] text-secondary' />

							<div className='py-5'>
								<p className='font-semibold text-[20px] stacked-fractions-[0.15px] text-center text-white leading-4'>
									Upload Document
								</p>
								<p className='font-semibold text-[15px] leading-4 stacked-fractions-[0.15px] text-[#9B9C9E] mt-5'>
									File formats: PDF,.Doc, CSV, PNG
								</p>
							</div>

							<div>
								<div className='bg-[#B6F09C] py-2 px-6 w-full rounded-lg text-[#0C1132] font-semibold'>
									Upload & Train
								</div>
							</div>
						</div>

						<input
							id='dropzone-file'
							type='file'
							className='hidden'
							accept='.pdf,.doc,.docx,.csv,.png'
						/>
					</label>
				</div>

				<div className='my-[30px]'>
					<SupportChatBox
						placeholder={'You can ask me anything! I am here to help.'}
					/>
				</div>
			</div>
		);
	};

	const tabContent = [renderView(), renderCreate()];

	return (
		<div className='bg-[#363A3D] p-[12px] flex'>
			<Sidebar />
			<div className='lg:w-[calc(100%-312px)] w-full lg:ml-[12px] h-[calc(100vh-24px)] overflow-auto no-scrollbar'>
				<div className='bg-[#1A1D21CC] sm:p-[24px] p-[12px_14px] rounded-[20px] md:sticky top-0 mb-[35px]'>
					<div className='sm:flex justify-between items-center pb-[5px]'>
						<div className='flex items-start gap-3'>
							<button
								className='lg:hidden mt-[8px]'
								onClick={() => setActive(!active)}
							>
								<img src={menu} alt='menu' className='w-[16px]' />
							</button>

							<h1 className='text-[20px] font-bold mb-1 text-white'>
								Personal GPT
							</h1>
						</div>

						<Notification />
					</div>

					<div className='my-4 sm:my-0'>
						<TabPanel
							tabPanel={tabPanel}
							currentTabIndex={currentTabIndex}
							onTabChange={(idx) => setCurrentTabIndex(idx)}
						/>
					</div>
				</div>

				{tabContent.map((item, index) => (
					<div className={`${index !== currentTabIndex ? 'hidden' : 'block'}`}>
						{item}
					</div>
				))}
				{currentTabIndex < 0 && renderOverRal()}
			</div>
		</div>
	);
};
export default PersonalGPT;

// SUPPORT COMPONENT
const BoxOveral = ({ name, image, description }) => {
	return (
		<div className='bg-boxOveral p-[20px_0px] border-t-[1px] border-[#ffffff14] rounded-[12px] flex items-center justify-start flex-col min-h-[180px] max-h-[180px]'>
			<img
				src={image}
				alt='icon'
				width={46}
				height={46}
				className='max-w-[46px] max-h-[46px]'
			/>
			<h4 className='text-[#FFFFFF] text-[18px] font-medium mt-[14px] uppercase'>
				{name}
			</h4>
			<p className='text-[#A8A8A8] text-[12px] font-medium mt-[7px] text-center'>
				{description}
			</p>
		</div>
	);
};

// SUPPORT COMPONENT
const BoxTitle = ({ name, des, className }) => (
	<div className={className}>
		<p className='text-white font-semibold text-[24px] leading-[32px]'>{name}</p>
		<p className='text-nobel text-[16px] stacked-fractions-[0.15px] mt-4'>{des}</p>
	</div>
);
