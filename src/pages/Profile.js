import React from 'react';
import TabPanel from '../components/TabPanel';
import { FiEdit } from 'react-icons/fi';
import Button from '../components/Button';
import { logout } from '../firebase/Firebase';

const tabPanel = [
	{
		name: 'Account',
		className: 'min-w-[181px]',
	},
	{
		name: 'Community',
		className: 'min-w-[181px]',
	},
	{
		name: 'Notifications',
		className: 'min-w-[181px]',
	},
];

function Profile({ displayName, photoURL, email }) {
	const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

	const handleLogout = async () => {
		await logout();
	};

	return (
		<div className='blueGrey p-1 sm:p-[0_25px_100px_25px] relative m-auto rounded-lg'>
			<div className=''>
				<h2 className='text-1xl text-center mb-6 font-medium tracking-tight text-gray-200 sm:text-2xl  '>
					User Profile
				</h2>
				{/* - */}

				<div className='flex flex-col min-[832px]:flex-row gap-5 items-center justify-between bg-[#1A1D21] px-5 rounded-3 p-[19px_0_7px_33px] mb-10'>
					<div className='flex flex-row items-center w-full gap-5 min-[832px]:flex-col min-[832px]:gap-0 min-[832px]:w-fit '>
						<div className='relative'>
							<img src={photoURL} alt='avatar' className='rounded-3' />
							<div className='absolute top-[-10px] right-[-20px] p-1 bg-[#1A1D21] rounded-3'>
								<FiEdit className='text-secondary w-[27px] h-[27px]' />
							</div>
						</div>

						<div>
							<p className='text-white text-[12px] font-semibold leading-6'>
								{displayName || 'no name'}
							</p>
							<p className='text-stem-green-500 text-[12px] font-extrabold leading-4 whitespace-nowrap'>
								Premium Member
							</p>
						</div>
					</div>
					<div className='overflow-auto w-full lg:w-fit'>
						<TabPanel
							tabPanel={tabPanel}
							currentTabIndex={currentTabIndex}
							onTabChange={(tabNumber) => setCurrentTabIndex(tabNumber)}
						/>
					</div>
				</div>

				{/* - */}

				{/*  */}
				<div className='grid grid-cols-2 sm:grid-cols-3 gap-7 lg:flex justify-between text-left'>
					<div className='flex flex-col mx-2 '>
						<span className='text-gray-200 text-lg mb-2 font-medium'>Name</span>
						<span className='text-gray-200 text-sm mb-1'>{displayName}</span>
						<span className='text-lime-200 text-sm'>Change name</span>
					</div>
					<div className='flex flex-col mx-2 '>
						<span className='text-gray-200 text-lg mb-2 font-medium'>Email</span>
						<span className='text-gray-200 text-sm mb-1'>{email}</span>
						<span className='text-lime-200 text-sm'>Change Email</span>
					</div>
					<div className='flex flex-col mx-2 '>
						<span className='text-gray-200 text-lg mb-2 font-medium'>
							Job Title
						</span>
						<span className='text-gray-400 text-sm mb-1'>Student</span>
						<span className='text-lime-200 text-sm'>Change Title</span>
					</div>
					<div className='flex flex-col mx-2 '>
						<span className='text-gray-200 text-lg mb-2 font-medium'>Password</span>
						<span className='text-sm mb-1 text-lime-200'>Change Password</span>
						<span className='text-lime-200 text-sm'>Enable 2FA</span>
					</div>
					<div className='flex flex-col mx-2 '>
						<span className='text-gray-200 text-lg mb-2 font-medium'>Language</span>
						<span className='text-gray-400 text-sm mb-1'>English</span>
						<span className='text-lime-200 text-sm'>Change Language</span>

						<Button className='mt-4' onClick={() => handleLogout()}>
							Logout
						</Button>
					</div>
				</div>
				{/*  */}
			</div>
		</div>
	);
}

export default Profile;
