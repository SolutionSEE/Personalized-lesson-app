import React from 'react';
import PropTypes from 'prop-types';

import arrowRightActiveIcon from '../../Assets/svg/arrow-right-active.svg';
import arrowRightIcon from '../../Assets/svg/arrow-right.svg';

const TabPanelType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	startIconSrc: PropTypes.string,
	className: PropTypes.string,
});

const propTypes = {
	currentTabIndex: PropTypes.number,
	tabPanel: PropTypes.arrayOf(TabPanelType).isRequired,

	onTabChange: PropTypes.func.isRequired,
};

const TabPanel = (props) => {
	const { currentTabIndex, tabPanel, onTabChange } = props;
	const isEmptyTabPanel = !tabPanel || tabPanel.length === 0;

	const isActiveTab = (index) => index === currentTabIndex;
	const handleTabClick = (index) => {
		onTabChange(index);

		if (isActiveTab(index)) onTabChange(-1);
	};

	return (
		<div>
			<div className='flex gap-[33px] overflow-x-auto no-scrollbar'>
				{!isEmptyTabPanel &&
					tabPanel.map((tab, index) => {
						const isTabActive = isActiveTab(index);
						return (
							<div
								key={'tab' + index}
								onClick={() => handleTabClick(index)}
								className={` ${tab.className} ${
									isTabActive
										? 'bg-tabActive text-black'
										: 'bg-tab text-nobel-light'
								} rounded-[12px] py-[17px] px-[14px] flex justify-between items-center cursor-pointer max-h-[53px] gap-[20px]`}
							>
								<div className='flex gap-[8px] items-center'>
									{tab.startIconSrc && (
										<img
											width={25}
											height={25}
											src={tab.startIconSrc}
											alt='icon-tab'
										/>
									)}
									<p className='capitalize font-semibold text-[14px] tracking-tighter-[0.15px]'>
										{tab.name}
									</p>
								</div>

								<img
									src={isTabActive ? arrowRightActiveIcon : arrowRightIcon}
									alt='arrow-icon'
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};

TabPanel.propTypes = propTypes;

export default TabPanel;
