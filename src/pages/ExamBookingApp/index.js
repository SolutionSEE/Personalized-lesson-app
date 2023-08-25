import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Notification from '../../components/Notification';
import menu from '../../Assets/Images/menu.png';
import arrowRight from '../../Assets/svg/arrow-right-active.svg';

import SupportChatBox from '../../components/SupportChatBox';
import { EXAM_BOOKING_TOOL, EXAM_BOOKING_TOOL_DETAIL } from './config';
import DateTimePicker from '../../components/DateTimePicker';
import chevronDownTiny from '../../Assets/svg/chevron-down-tiny.svg';
import calendarSvg from '../../Assets/svg/exam-booking-app/calendar.svg';
import Button from '../../components/Button';

const ExamBookingApp = () => {
	const [active, setActive] = React.useState(false);

	const [currentShow, setCurrentShow] = React.useState('tool');

	function renderExamBookingTool() {
		return (
			<div className='xl:px-[150px]'>
				<h1 className='sm:text-[28px] text-[20px] font-bold text-white'>
					Exam Booking App
				</h1>
				<p className='text-[#9B9C9E] font-medium sm:text-[16px] text-[14px] mb-[30px]'>
					Select one or more courses below to schedule your next exam
				</p>
				<div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-3 items-start mt-[14px]'>
					{EXAM_BOOKING_TOOL.map((tool, index) => {
						return (
							<BoxBookingToll
								{...tool}
								key={'boxtool' + index}
								onClick={() => setCurrentShow('toolDetail')}
							/>
						);
					})}
				</div>
				<div className='mt-[50px] sm:mt-[110px]'>
					<SupportChatBox
						placeholder={'You can ask me anything! I am here to help.'}
					/>
				</div>
			</div>
		);
	}

	function renderExamBookingToolDetail() {
		return (
			<div>
				<div className='xl:px-[150px]'>
					<h1 className='sm:text-[28px] text-[20px] font-bold text-white'>
						Exam Booking App
					</h1>
					<p className='text-[#9B9C9E] font-medium sm:text-[16px] text-[14px] mb-[30px]'>
						Select which math course you want to book.
					</p>
				</div>

				<div className='relative xl:px-[150px]'>
					<div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-3 items-start mt-[14px]'>
						{EXAM_BOOKING_TOOL_DETAIL.map((tool, index) => {
							return (
								<BoxBookingTollDetail
									{...tool}
									key={'boxtoolDetail' + index}
									onClick={() => setCurrentShow('booking')}
								/>
							);
						})}
					</div>
					<div>
						<img
							src={arrowRight}
							alt='arrow-left'
							className='absolute left-0 rotate-180 top-1/2 w-[43px] h-[43px] rounded-full p-3 cursor-pointer bg-[#EAEBF8]'
						/>
					</div>

					<div>
						<img
							src={arrowRight}
							alt='arrow-right'
							className='absolute right-0 top-1/2 w-[43px] h-[43px] rounded-full p-3 cursor-pointer bg-[#EAEBF8]'
						/>
					</div>
				</div>

				<div className='mt-[50px] sm:mt-[150px] xl:px-[150px]'>
					<SupportChatBox
						placeholder={'You can ask me anything! I am here to help.'}
					/>
				</div>
			</div>
		);
	}

	function renderClassSelected() {
		return (
			<div>
				<div className='xl:px-[150px] mb-[50px]'>
					<h1 className='sm:text-[28px] text-[20px] font-bold text-white'>
						Exam Booking App
					</h1>
					<p className='text-[#9B9C9E] font-medium sm:text-[16px] text-[14px] mb-[30px] mt-4'>
						When do you want to book your exam?
					</p>
				</div>

				<div className='xl:pl-[150px] xl:pr-[80px] mb-[45px] flex flex-col min-[450px]:flex-row gap-5 justify-between'>
					<p className='font-bold text-[20px] text-secondary leading-8'>
						Algebra : August 8 - August 12
					</p>

					<div className='flex items-center gap-[1px] bg-[#1A1D21] px-[12px] py-[8px] text-nobel font-semibold text-[12px] w-fit rounded-[8px] cursor-pointer'>
						<p>Sort By</p>
						<img src={chevronDownTiny} alt='chevron-down-tiny' />
					</div>
				</div>

				<div className='overflow-x-auto'>
					<div className='flex items-center justify-between min-w-[1020px] min-h-[270px]'>
						<img
							src={arrowRight}
							alt='arrow-left'
							className='rotate-180 w-[43px] h-[43px] rounded-full p-3 cursor-pointer bg-[#EAEBF8]'
						/>
						<DateTimePicker />
						<img
							src={arrowRight}
							alt='arrow-right'
							className='w-[43px] h-[43px] rounded-full p-3 cursor-pointer bg-[#EAEBF8]'
						/>
					</div>
				</div>

				<div
					onClick={() => setCurrentShow('confirm')}
					className='py-3 px-6 flex items-center justify-between bg-stem-green-500 rounded-3 w-fit cursor-pointer min-w-[165px] mx-auto my-[82px]'
				>
					<p className='capitalize font-semibold text-[16px] leading-6 text-[#0C1132]'>
						book now
					</p>
					<img src={arrowRight} alt='arrow-right' />
				</div>

				<div className='mt-[50px] sm:mt-0 xl:px-[150px]'>
					<SupportChatBox
						placeholder={'You can ask me anything! I am here to help.'}
					/>
				</div>
			</div>
		);
	}

	function renderConfirm() {
		const data = [
			{
				title: 'date',
				value1: 'Saturday August 8th',
			},
			{
				title: 'time',
				value1: '4:00 p.m.m',
				value2: 'Add to Calendar',
				onClickValue2: () => {},
			},
			{
				title: 'class',
				value1: 'algebra',
			},
			{
				title: 'instructor',
				value1: 'John Jones',
				noBorder: true,
			},
		];

		const Infor = ({ title, noBorder, value1, value2, onClickValue2 }) => {
			return (
				<div
					className={`${
						noBorder ? 'border-none' : 'border-b-2 border-b-[#292A2C]'
					} flex items-start py-6 `}
				>
					<p className='w-1/3 font-bold text-[16px] md:text-[20px] leading-6 text-white capitalize'>
						{title}
					</p>
					<div className='flex flex-col'>
						<p className='text-[16px] leading-6 text-white capitalize'>{value1}</p>
						{value2 && (
							<p
								onClick={onClickValue2}
								className='text-secondary text-[16px] leading-6 cursor-pointer'
							>
								{value2}
							</p>
						)}
					</div>
				</div>
			);
		};

		return (
			<div className='w-full h-full md:my-[92px] bg-nobel-black-800 shadow-extra-large rounded-2xl p-[30px_15px] lg:mx-auto lg:min-w-[640px] lg:w-fit lg:h-fit md:p-[30px_33px_8px_73px]'>
				<div className='flex gap-9 items-center mb-8 md:mb-6'>
					<img src={calendarSvg} alt='calendar' className='w-[47px] h-[47px]' />
					<p className='text-white font-bold text-[20px] md:text-[28px] leading-9'>
						Confirmed Booking
					</p>
				</div>

				{data.map((data, index) => (
					<Infor key={index} {...data} />
				))}

				<div className='flex justify-center gap-1 md:gap-10 my-6 md:mt-10 md:mb-[98px]'>
					<Button>Reschedule</Button>
					<Button>Save to My Schedule</Button>
				</div>
			</div>
		);
	}

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
								Edu-Tech Platform
							</h1>
						</div>

						<Notification />
					</div>
				</div>

				{currentShow === 'tool'
					? renderExamBookingTool()
					: currentShow === 'toolDetail'
					? renderExamBookingToolDetail()
					: currentShow === 'booking'
					? renderClassSelected()
					: renderConfirm()}
			</div>
		</div>
	);
};

export default ExamBookingApp;

const BoxBookingToll = ({ name, description, endIcon, onClick, ...props }) => {
	const [isHover, setIsHover] = React.useState(false);
	return (
		<div
			onClick={onClick}
			onMouseOver={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			className='group bg-boxOveral hover:bg-tabActive cursor-pointer p-[20px_0px] border-t-[1px] border-[#ffffff14] rounded-[12px] flex items-center justify-start flex-col min-h-[170px] max-h-[170px]'
		>
			<div className='w-[29px] h-[29px] max-w-[29px] max-h-[29px]'>
				{props.image && (
					<props.image
						className='w-[29px] h-[29px]'
						fill={isHover && 'black'}
					></props.image>
				)}
			</div>
			<div className='mt-[6px] relative flex'>
				<p className='text-[#FFFFFF] group-hover:text-[#1B1E22] text-[18px] font-medium capitalize flex-1 text-center'>
					{name}
				</p>
				{endIcon && (
					<div className='absolute -right-6 top-1/2 -translate-y-1/2'>{endIcon}</div>
				)}
			</div>
			<p className='text-[#A8A8A8] group-hover:text-[#1B1E22] text-[12px] font-medium mt-[7px] text-center'>
				{description}
			</p>
		</div>
	);
};

const BoxBookingTollDetail = ({ name, description, onClick, image }) => {
	return (
		<div
			onClick={onClick}
			className='bg-boxOveral cursor-pointer p-[10px_0px] border-t-[1px] border-[#ffffff14] rounded-[12px] flex items-center justify-start flex-col min-h-[170px] max-h-[170px]'
		>
			<div className='w-[44px] h-[44px] max-w-[44px] max-h-[44px]'>
				<img src={image} className='w-[44px] h-[44px]' alt={name} />
			</div>
			<p className='mt-[6px] text-[#FFFFFF] text-[18px] font-medium capitalize text-center'>
				{name}
			</p>
			<p className='text-[#A8A8A8] text-[12px] font-medium mt-[7px] text-center'>
				{description}
			</p>
		</div>
	);
};
