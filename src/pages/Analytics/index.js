import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import menu from '../../Assets/Images/menu.png';
import Notification from '../../components/Notification';
import BoxAnalytics from './Box';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowButton from './ArrowButton';

import { Responsive, WidthProvider } from 'react-grid-layout';
import ReactApexChart from 'react-apexcharts';
import { dataMonthlyAttendance } from './config';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const AnalyticsPerformance = (props) => {
	const [active, setActive] = React.useState(false);

	const layout = [
		{ i: 'a', x: 1, y: 0, w: 1, h: 2, static: false },
		{ i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
		{ i: 'c', x: 4, y: 0, w: 1, h: 2 },
	];

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
								Welcome Back, Tyler!
							</h1>
						</div>

						<Notification />
					</div>
				</div>

				<BoxAnalytics className='px-6 py-4'>
					<div className='flex items-center gap-4 cursor-pointer'>
						<div>
							<CircularProgressbar
								className='max-h-[75px]'
								strokeWidth={10}
								value={76}
								text={76}
								styles={buildStyles({
									textSize: '22px',
									pathColor: `#B6F09C`,
									textColor: '#fff',
									trailColor: '#676A84',
									backgroundColor: '#3e98c7',
								})}
							/>
						</div>

						<div>
							<p className='font-bold text-[19px] text-white'>Completed Classes</p>
							<p className='font-medium text-nobel text-[12px] mt-1.5'>
								Your Ring is 90% complete
							</p>
						</div>

						<ArrowButton />
					</div>
				</BoxAnalytics>

				<BoxAnalytics className='py-4'>
					<div>
						<p>Monthly Attendance</p>
						<ReactApexChart
							type='area'
							height={300}
							width={360}
							series={dataMonthlyAttendance.series}
							options={dataMonthlyAttendance.options}
						/>
					</div>
				</BoxAnalytics>
			</div>
		</div>
	);
};

export default AnalyticsPerformance;
