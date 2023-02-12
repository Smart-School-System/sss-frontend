import React from 'react';

const Wrapper = ({children, label}) => {
	return (
		<div className='w-full h-auto relative rounded-lg flex flex-col'>
			<h3 className="text-xl text-darkFontColo py-5 dark:text-darkThemeTextLight">{label}</h3>
			<div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-x-24 gap-y-10'>
				{children}
			</div>
		</div>
	);
};

export default Wrapper;