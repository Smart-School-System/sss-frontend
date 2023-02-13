import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsFillCaretDownFill } from 'react-icons/bs';

const SelectInput = (props) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const dispatcher = useDispatch();

	return (
		<div className="relative w-full">
			<BsFillCaretDownFill className='pointer-events-none w-3 h-3 mt-1 absolute top-5 transform -translate-y-1/2 right-3 text-darkThemeTextLight' />
			<label htmlFor="select-opt" className="pointer-events-none  absolute text-darkThemeTextLight dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-1 z-[1px] origin-[0] bg-white dark:bg-darkTheme4 px-2 peer-focus:px-2 peer-focus:text-primaryBlue dark:peer-focus:text-darkThemeTextLight peer-focus:dark:text-darkThemeTextLight peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
				{props.placeholder} <span className={'text-primaryBlue'}> *</span>
			</label>
			<input
				id="select-opt"
				type={'text'}
				readOnly
				autoComplete='off' 
				disabled={props.isDisabled}
				onClick={() => setShowDropdown(!showDropdown)}
				value={props.value}
				className={`${props.isDisabled ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xl border-1 border-[#CCCDD0] appearance-none dark:text-white dark:border-darkThemeTextLight dark:focus:border-primaryBlue focus:outline-none focus:ring-0 focus:border-primaryBlue peer  ${props.isDisabled ? 'dark:text-gray-500 dark:bg-darkTheme1 text-darkThemeTextLight' : 'dark:text-white'}`}
			/>
			<div id='drop-list' className={`${!showDropdown && 'hidden'} absolute z-50 max-h-40 overflow-x-hidden overflow-y-auto sc py-2 flex flex-col w-full rounded-md bg-white dark:bg-darkTheme4 shadow-xl dark:shadow-none dark:border-[1px] dark:border-t-0 dark:border-darkThemeTextLight`}>
				{
					props.list.map((item, index) => (<p key={index} className='px-4 py-1 cursor-pointer hover:bg-lightBlue hover:dark:bg-darkTheme1 text-darkThemeTextLight text-[16px]' onClick={(e) => {
						dispatcher(props.action(props.onSelect(e)));
						setShowDropdown(false);
					}}>{item}</p>))
				}
			</div>
		</div>
	);
};

export default SelectInput;