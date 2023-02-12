import React from 'react';
import logo from '../../assets/logo/logo.svg';

const Logo = () => {
	return (
		<div className='flex justify-between items-center space-x-2 cursor-pointer'>
			<img src={logo} alt="app-logo"/>
			<span className='font-black text-xl text-darkFontColor dark:text-darkThemeTextLight'>Schoolar</span>
		</div>
	);
};

export default Logo;