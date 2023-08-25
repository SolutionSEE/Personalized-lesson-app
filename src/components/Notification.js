import bell from '../Assets/svg/bell.svg';
import clock from '../Assets/svg/clock.svg';
import share from '../Assets/svg/share.svg';

const Notification = (props) => {
	return (
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
				<p className='text-[#686B6E] text-[14px] font-semibold'>Schedule</p>
			</div>
			<div className='flex gap-[10px]'>
				<img src={share} alt='share' />
				<p className='text-[#686B6E] text-[14px] font-semibold'>Share</p>
			</div>
		</div>
	);
};

export default Notification;
