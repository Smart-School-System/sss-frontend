import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import Logo from '../components/commons/logo';
import user from '../assets/images/user.png';
import './styles.css';
import Toggle from '../components/commons/toggle';

const Navbar = ({ leftValue }) => {
	const [isPoped, setPoped] = useState(false);
	return (
		<header className='navbar fixed left-40 right-0 top-0 z-30 bg-white dark:bg-darkTheme1 flex items-center space-x-20 px-12 h-32' style={{ left: leftValue }}>
			<nav className="flex justify-between align-middle h-auto w-full">
				<Logo />
				<div className="flex justify-end items-center space-x-6">
					<Link to={''}>
						<FaBell size={25} className='text-greyFontColor dark:text-darkThemeTextLight' />
					</Link>
					<Toggle/>
					<div onMouseOver={() => setPoped(true)} onMouseOut={() => setPoped(false)} className='cursor-pointer'>
						<div>
							<img src={user} alt="" className='rounded-full'/>
						</div>
						<div style={{ borderWidth: 1 }} className={`${!isPoped && 'hidden'} flex-col space-y-3 bg-white dark:bg-darkTheme1 border-transparent dark:border-darkTheme3 absolute top-23 right-2 drop-shadow-md w-auto h-auto p-2 rounded-lg`}>
							<Link to={''} className='flex justify-start p-2 px-5 items-center space-x-4 text-greyFontColor dark:text-darkThemeTextLight dark:hover:bg-darkTheme3 hover:text-primaryBlue hover:bg-lightBlue rounded-lg'><FaUserAlt /><span>Profile</span></Link>
							<Link to={''} className='flex justify-start p-2 px-5 items-center space-x-4 text-greyFontColor dark:text-darkThemeTextLight dark:hover:bg-darkTheme3 hover:text-primaryBlue hover:bg-lightBlue rounded-lg'><FaSignOutAlt /><span>Sign Out</span></Link>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;