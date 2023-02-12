import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from 'react-icons/io5';
import { menuList } from '../helpers/menu-data';
import './styles.css';

const SideNav = ({ toggler }) => {
	const [isCollapsed, setCollapsed] = useState(false);

	return (
		<aside className={`side-nav flex justify-center items-center fixed top-0 left-0 z-50 min-h-full bg-white dark:bg-darkTheme1 ${isCollapsed ? 'px-0 w-20' : 'px-12 w-72'}`}>
			<div className='flex-col justify-center items-center space-y-8 w-full'>
				{
					menuList.map((item, index) => (
						<NavLink key={index} className={`flex items-center ${isCollapsed ? 'justify-center space-x-0 px-0' : 'justify-start space-x-4 px-2'} text-base py-3 text-greyFontColor dark:text-darkThemeTextLight hover:text-primaryBlue`} to={`/${item.path}`}>
							{item.icon}
							<span style={{ display: isCollapsed ? 'none' : 'inline', }}>
								{item.name}
							</span>
						</NavLink>
					))
				}
			</div>
			<i className='chevron-toggle cursor-pointer absolute transition-all' style={{ left: isCollapsed ? 64 : 272, top: '80%' }} onClick={() => setCollapsed(toggler)}>
				{!isCollapsed ? <IoChevronBackCircleOutline className='text-primaryBlue text-2xl' /> : <IoChevronForwardCircleOutline className='text-primaryBlue text-2xl' />}
			</i>
		</aside>
	);
};

export default SideNav;