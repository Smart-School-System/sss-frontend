import React from 'react';
import { MdFilterListAlt } from 'react-icons/md';
import { FaListUl } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import Search from '../commons/search-input';

const Filters = ({ viewType, setViewType, handleSearchFilter }) => {
	return (
		<div className='h-full flex justify-center items-center space-x-3'>
            <Search handleSearchFilter={handleSearchFilter}/>
			<div className='flex justify-center items-center space-x-1 border-[1px] h-9 border-gray-300 text-black dark:text-darkThemeTextLight dark:border-darkThemeTextLight py-[5px] px-3 rounded-lg cursor-pointer'>
				<MdFilterListAlt />
				<span>Filter</span>
			</div>
			<div className='flex justify-center items-center border-[1px] border-gray-300 h-9 w-20 rounded-lg cursor-pointer dark:text-darkThemeTextLight dark:border-darkThemeTextLight'>
				<span className={`flex-[0.5] flex justify-center items-center text-lg h-full rounded-l-lg dark:text-darkThemeTextLight ${viewType === 'list' ? 'bg-primaryBlue dark:text-white' : 'bg-transparent'}`} onClick={() => setViewType('list')}><FaListUl /></span>
				<span className={`flex-[0.5] flex justify-center items-center text-lg h-full rounded-r-lg dark:text-darkThemeTextLight ${viewType === 'grid' ? 'bg-primaryBlue dark:text-white' : 'bg-transparent'}`} onClick={() => setViewType('grid')}><BsGridFill /></span>
			</div>
		</div>
	);
};

export default Filters;