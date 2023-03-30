import React from 'react';

const Wrapper = ({children, label}) => {
	return (
		<div className='w-full h-auto relative rounded-lg p-3 flex flex-col '>
			<h3 className="text-xl text-darkFontColor py-10 dark:text-darkThemeTextLight">{label}</h3>
            <div className='w-full grid grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-7'>
				{children}
			</div>
		</div>
	);
};

export default Wrapper;