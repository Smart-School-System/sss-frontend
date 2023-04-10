import React, { useEffect, useState } from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const Toggle = () => {
    const [theme, setTheme] = useState();

    const handleToggle = () => {

        const color = theme ? 'light' : 'dark';

        theme && localStorage.setItem('theme', 'light');
        !theme && localStorage.setItem('theme', 'dark');

        document.documentElement.className = color
    }

    return (
        <div className='rounded-full bg-slate-200 dark:bg-darkTheme2 w-10 h-10 flex items-center justify-center cursor-pointer' onClick={() => {
            setTheme(prev => !prev)
            handleToggle()
        }}>
            {
                theme ?
                <BsSunFill className={'text-greyFontColor dark:text-darkThemeTextLight text-xl'} />:
                    <BsMoonStarsFill className={'text-greyFontColor dark:text-darkThemeTextLight text-xl'} /> 
            }
        </div>
    );
};

export default Toggle;