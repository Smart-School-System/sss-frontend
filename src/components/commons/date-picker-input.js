import React, { useEffect } from 'react';
import Datepicker from 'flowbite-datepicker/Datepicker';
import { MdOutlineDateRange } from 'react-icons/md';
import { useDispatch } from 'react-redux';


const DatePickerInput = (props) => {

	const dispatcher = useDispatch();

	useEffect(() => {
		const datepickerEl = document.getElementsByClassName('datepickerId');
		for(let i = 0; i < datepickerEl.length; i++) {
			const newDate = new Datepicker(datepickerEl[i]);
			newDate.config.format = 'dd/mm/yyyy';
		}
	}, []);
	return (
		<div className="relative w-full">
			<MdOutlineDateRange className='pointer-events-none w-4 h-4 absolute top-6 transform -translate-y-1/2 right-3 text-darkThemeTextLight'/>
			<label htmlFor="floating_outlined" className="absolute text-darkThemeTextLight dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-1 z-[1px] origin-[0] bg-white dark:bg-darkTheme4 px-2 peer-focus:px-2 peer-focus:text-primaryBlue dark:peer-focus:text-darkThemeTextLight peer-focus:dark:text-darkThemeTextLight peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
				{props.placeholder}<span className={'text-primaryBlue'}> *</span>
			</label>
			<input
				id="floating_outlined" 
				type="text"
				readOnly 
				autoComplete='off' 
				disabled={props.isDisabled}
				className={`datepickerId block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xl border-1 border-[#CCCDD0] appearance-none dark:text-white dark:border-darkThemeTextLight dark:focus:border-primaryBlue focus:outline-none focus:ring-0 focus:border-primaryBlue peer ${props.isDisabled ? 'hover:cursor-not-allowed dark:text-gray-500 dark:bg-darkTheme1 text-darkThemeTextLight' : 'hover:cursor-pointer dark:text-white'}`}
				defaultValue={props.value}
				onSelect={(e) => (dispatcher(props.action(props.onSelect(e))))}     

			/>
		</div>
	);

};
export default DatePickerInput;