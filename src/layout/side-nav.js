import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from 'react-icons/io5';
import { menuList } from '../helpers/menu-data';
import './styles.css';

const SideNav = ({ toggler }) => {
	const [isCollapsed, setCollapsed] = useState(false);
    const location = useLocation();
	return (
        <aside className={`side-nav w-full p-0 flex justify-center items-center fixed  bottom-0 left-0 z-50 h-20 bg-white dark:bg-darkTheme1 ${isCollapsed ? 'md:px-0 md:w-20' : 'md:px-12 md:w-72'} md:fixed md:top-0 md:left-0 md:z-50 md:min-h-full`}>
			<div className='flex justify-around md:flex-col md:justify-center md:items-center md:space-y-8 md:w-full'>
				{
					menuList.map((item, index) => (
						<NavLink key={index} className={`flex w-full items-center justify-center p-10 ${isCollapsed ? 'md:justify-center md:space-x-0 md:px-0' : 'md:justify-start md:space-x-4 md:px-2'} text-base py-3 text-greyFontColor dark:text-darkThemeTextLight hover:text-primaryBlue ${location.pathname.includes(item.path) ? 'active' : ''}`} to={`/${item.path}`}>
							{item.icon}
                            <span className={`hidden ${isCollapsed ? 'md:hidden' : 'md:inline-block'}`}>
								{item.name}
							</span>
						</NavLink>
					))
				}
			</div>
			<i className='hidden md:inline-block md:chevron-toggle md:cursor-pointer md:absolute md:transition-all' style={{ left: isCollapsed ? 64 : 272, top: '80%' }} onClick={() => setCollapsed(toggler)}>
				{!isCollapsed ? <IoChevronBackCircleOutline className='text-primaryBlue text-2xl' /> : <IoChevronForwardCircleOutline className='text-primaryBlue text-2xl' />}
			</i>
		</aside>
	);
};

export default SideNav;