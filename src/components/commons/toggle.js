import React, { useEffect, useState } from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const Toggle = () => {
    const [theme, setTheme] = useState(true);


    useEffect(() => {

        (() => {
            theme && localStorage.setItem('theme', 'light');
            !theme && localStorage.setItem('theme', 'dark');

            if (localStorage.getItem('theme') === 'dark') {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
            } else {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
            }
        })()
    }, [theme]);
    return (
        <div className='rounded-full bg-slate-200 dark:bg-darkTheme2 w-10 h-10 flex items-center justify-center cursor-pointer' onClick={() => setTheme(prev => !prev)}>
            {
                theme ?
                    <BsMoonStarsFill className={'text-greyFontColor dark:text-darkThemeTextLight text-xl'} /> :
                    <BsSunFill className={'text-greyFontColor dark:text-darkThemeTextLight text-xl'} />
            }
        </div>
    );
};

export default Toggle;