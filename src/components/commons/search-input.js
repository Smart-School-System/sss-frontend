import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
	return (
		<div className='relative'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-darkThemeTextLight'>
				<FiSearch/>
			</div>
			<input type='search' id='default-search' className='block w-full p-2 pl-10 text-sm text-gray-900 border-[1px] border-gray-300 rounded-lg  focus:border-primaryBlue focus:border-[1px] ring-0 focus:ring-0 bg-transparent dark:border-darkThemeTextLight dark:placeholder-gray-400 dark:text-gray-100 dark:focus:border-primaryBlue' placeholder='Search by name/ID' />
		</div>
	);
};

export default Search;