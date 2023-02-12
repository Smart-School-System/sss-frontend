import React, { useEffect, useState } from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const Toggle = () => {
	const [theme, setTheme] = useState('light');

	const themeSetter = () => {
		if (localStorage.getItem('theme') === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	useEffect(() => {
		if (localStorage.getItem('theme') === null) {
			localStorage.setItem('theme', 'light');
		} else {
			localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
		}
		themeSetter();
	}, [theme]);
	return (
		<div className='rounded-full bg-slate-200 dark:bg-darkTheme2 w-10 h-10 flex items-center justify-center cursor-pointer' onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>
			{
				theme === 'light' ?
					<BsSunFill  className={'text-greyFontColor dark:text-darkThemeTextLight text-xl'}/> :
					<BsMoonStarsFill className={'text-greyFontColor dark:text-darkThemeTextLight text-xl'}/>
			}
		</div>
	);
};

export default Toggle;