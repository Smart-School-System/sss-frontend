import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import Logo from '../components/commons/logo';
import user from '../assets/images/user.png';
import './styles.css';
import Toggle from '../components/commons/toggle';

const Navbar = ({ left }) => {
	const [isPoped, setPoped] = useState(false);

    const handleSignOut = () => {
        localStorage.removeItem('token')
        window.location.href = '/'
    }
	return (
        <header className={`fixed right-0 left-0 ${left} top-0 z-30 bg-white dark:bg-darkTheme4 flex items-center space-x-20 px-12 h-32`}>
			<nav className='flex justify-between align-middle h-auto w-full'>
				<Logo />
				<div className='flex justify-end items-center space-x-6'>
					<Link to={''}>
						<FaBell size={25} className='text-greyFontColor dark:text-darkThemeTextLight' />
					</Link>
					<Toggle/>
					<div onMouseOver={() => setPoped(true)} onMouseOut={() => setPoped(false)} className='cursor-pointer'>
						<div>
							<img src={user} alt='' className='rounded-full'/>
						</div>
						<div style={{ borderWidth: 1 }} className={`${!isPoped && 'hidden'} flex-col space-y-3 bg-white dark:bg-darkTheme1 border-transparent dark:border-darkTheme3 absolute top-23 right-2 drop-shadow-md w-auto h-auto p-2 rounded-lg`}>
							<Link to={''} className='flex justify-start p-2 px-5 items-center space-x-4 text-greyFontColor dark:text-darkThemeTextLight dark:hover:bg-darkTheme3 hover:text-primaryBlue hover:bg-lightBlue rounded-lg'><FaUserAlt /><span>Profile</span></Link>
							<button onClick={handleSignOut} className='flex justify-start p-2 px-5 items-center space-x-4 text-greyFontColor dark:text-darkThemeTextLight dark:hover:bg-darkTheme3 hover:text-primaryBlue hover:bg-lightBlue rounded-lg'><FaSignOutAlt /><span>Sign Out</span></button>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;