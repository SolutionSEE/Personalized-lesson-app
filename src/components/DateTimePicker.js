import { isEmpty } from 'lodash';
import moment from 'moment';
import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

const DateTimePicker = ({ onDateTimeChange }) => {
	const fromDate = '2023-08-08';
	const endDate = '2023-08-14';

	const [dates, setDates] = React.useState([]);

	const [selectedTime, setSelectedTime] = React.useState({});
	const [selectedDate, setSelectedDate] = React.useState({});

	React.useEffect(() => {
		const datesArr = [];
		const start = moment(fromDate, 'YYYY-MM-DD');
		const end = moment(endDate, 'YYYY-MM-DD');

		while (start.isSameOrBefore(end, 'day')) {
			datesArr.push(start.format('YYYY-MM-DD'));
			start.add(1, 'day');
		}

		setDates(datesArr);
	}, [fromDate, endDate]);

	return (
		<div className='flex gap-2'>
			{dates.map((date, index) => (
				<div key={index} className='flex flex-col'>
					<BoxDate
						date={date}
						selectedTime={selectedTime}
						selectedDate={selectedDate}
						onChangeTime={(time) => setSelectedTime(time)}
						onChangeDate={(date) => setSelectedDate(date)}
					/>
				</div>
			))}
		</div>
	);
};

const BoxDate = ({ date, selectedTime, selectedDate, onChangeTime, onChangeDate }) => {
	const isActiveBox = moment(date).isSame(moment(selectedDate));
	const [currentSession, setCurrentSession] = React.useState({});
	const sessionList = [
		{
			name: 'morning',
			timeFrom: 7,
			timeTo: 11,
			timeType: 'am',
		},
		{
			name: 'afternoon',
			timeFrom: 1,
			timeTo: 5,
			timeType: 'pm',
		},
		{
			name: 'evening',
			timeFrom: 6,
			timeTo: 10,
			timeType: 'pm',
		},
	];

	const handleClickSession = (session) => {
		if (currentSession.name === session.name) setCurrentSession({});
		else setCurrentSession(session);
	};

	const getTimeArray = (session) => {
		let timeArr = [];
		for (let i = session.timeFrom; i <= session.timeTo; i++) {
			timeArr.push(i);
		}
		return timeArr;
	};

	React.useEffect(() => {
		if (!isActiveBox) setCurrentSession({});
	}, [isActiveBox]);

	return (
		<div
			className='flex flex-col items-center gap-3'
			onClick={() => onChangeDate(date)}
		>
			<p className={`font-medium text-[14px text-nobel leading-6]`}>
				{moment(date).format('dddd Do')}
			</p>

			<div
				className={`relative flex flex-col items-center gap-2 bg-glass-fill rounded-[10px] ${
					isActiveBox ? 'bg-glass-fill' : 'bg-none'
				}`}
			>
				{sessionList.map((session, index) => {
					const isActiveSession = currentSession.name === session.name;
					return (
						<div
							className={`${
								isActiveSession && isActiveBox
									? 'bg-transparent'
									: 'bg-glass-fill border-t border-t-glass-stroke'
							} w-full text-center py-5 px-2 rounded-[10px] min-w-[128px] z-0`}
							key={index}
							onClick={() => handleClickSession(session)}
						>
							<p className='font-medium text-white capitalize text-[18px] -stacked-fractions-[1px]'>
								{session.name}
							</p>
						</div>
					);
				})}

				{!isEmpty(currentSession) && isActiveBox && (
					<div className='flex flex-col absolute right-0 md:right-auto min-[1570px]:left-[calc(-100%-9px)] bg-[#161616E6] p-3 min-w-[128px] rounded-[10px] border border-black z-50'>
						<div className='flex justify-between items-center mb-4'>
							<p className='capitalize text-nobel text-[14px] font-medium'>
								{currentSession.name}
							</p>

							<IoCloseCircleOutline
								className='text-nobel w-5 h-5 cursor-pointer'
								onClick={() => setCurrentSession({})}
							/>
						</div>

						{getTimeArray(currentSession).map((time, index) => {
							const isSelectedTime =
								selectedTime.time === time &&
								selectedTime.timeType === currentSession.timeType;
							return (
								<p
									key={'time' + index}
									onClick={() =>
										onChangeTime({ time, timeType: currentSession.timeType })
									}
									className={`${
										isSelectedTime ? 'text-secondary' : 'text-white'
									} font-medium text-[14px] mb-[11px] cursor-pointer hover:text-secondary`}
								>
									{moment(time + currentSession.timeType, 'ha').format('h:mm a')}
								</p>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default DateTimePicker;
