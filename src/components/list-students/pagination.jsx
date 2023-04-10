import React, { useState } from 'react';
import { BsCaretLeftFill, BsCaretRightFill, BsFillCaretDownFill } from 'react-icons/bs';

const Pagination = ({ itemsPerPage, totalItems, paginate, perPage }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	const [current, setCurrent] = useState(0);
	const [toggle, setToggle] = useState(1);
	const [isPopped, setPopped] = useState(false);

	const handleNavigate = (value) => {
		if (value < 0) setCurrent(prev => prev);
		else if (value > pageNumbers.length - 1) setCurrent(prev => prev);
		else {
			paginate(value + 1);
			setToggle(value + 1);
			setCurrent(value);
		}
	};

	const handleClick = (index) => {
		setToggle(index);
		paginate(index);
	};

	const handleToggle = (index) => {
		return index === toggle ? 'text-primaryBlue border-primaryBlue bg-blue-100 dark:bg-transparent flex items-center justify-center rounded-md border-[1px] dark:text-darkThemeTextLight w-7 h-7 cursor-pointer' :
			'flex items-center justify-center rounded-md border-[1px] border-darkThemeTextLight dark:text-darkThemeTextLight w-7 h-7 cursor-pointer';
	};

	return (
		<div className='flex items-center justify-center space-x-10 font-light dark:text-darkThemeTextLight select-none'>
			<h1>Total {itemsPerPage} items</h1>
			<div className="flex items-center justify-between space-x-5">
				<BsCaretLeftFill className='hover:text-primaryBlue dark:hover:text-primaryBlue dark:text-darkThemeTextLight cursor-pointer' onClick={() => handleNavigate(current - 1)} />
				<div className="flex items-center justify-center space-x-2 ">
					{
						pageNumbers.slice(current, current + 3).map((number, _) => (
							<span key={number} className={handleToggle(number)} onClick={() => handleClick(number)}>
								{number}
							</span>
						))
					}
				</div>
				<BsCaretRightFill className='hover:text-primaryBlue dark:hover:text-primaryBlue dark:text-darkThemeTextLight cursor-pointer' onClick={() => handleNavigate(current + 1)} />
			</div>
			<div className='relative flex items-center justify-center space-x-3 p-[4px] rounded-md border-[1px] dark:hover:text-primaryBlue dark:text-darkThemeTextLight border-darkThemeTextLight hover:border-primaryBlue hover:text-primaryBlue  cursor-pointer' onClick={() => setPopped(!isPopped)}>
				<span>{itemsPerPage}/Pages</span>
				<BsFillCaretDownFill />
				<div className={`${!isPopped && 'hidden'} flex-col space-y-3 bg-white dark:bg-darkTheme1 border-transparent dark:border-darkTheme3 absolute top-[33px] right-0 z-10 drop-shadow-md w-full h-auto p-2 rounded-lg`}>
					<span className='flex justify-start p-2 px-5 items-center space-x-4 text-greyFontColor dark:text-darkThemeTextLight dark:hover:bg-darkTheme3 hover:text-primaryBlue hover:bg-lightBlue rounded-lg' onClick={() => perPage(5)}>5</span>
					<span className='flex justify-start p-2 px-5 items-center space-x-4 text-greyFontColor dark:text-darkThemeTextLight dark:hover:bg-darkTheme3 hover:text-primaryBlue hover:bg-lightBlue rounded-lg' onClick={() => perPage(10)}>10</span>
					<span className='flex justify-start p-2 px-5 items-center space-x-4 text-greyFontColor dark:text-darkThemeTextLight dark:hover:bg-darkTheme3 hover:text-primaryBlue hover:bg-lightBlue rounded-lg' onClick={() => perPage(20)}>20</span>
				</div>
			</div>
		</div>
	);
};

export default Pagination;