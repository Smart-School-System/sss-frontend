import React from 'react';
import {useDispatch} from 'react-redux';

const InputFloat = (props) => {
	const dispatcher = useDispatch();
	return (
		<div className='relative w-full'>
			<input type='text' autoComplete='off' disabled={props.isDisabled} value={props.value} onChange={(e) => dispatcher(props.action(props.onChange(e)))} id='floating_outlined' className={` ${props.isDisabled ? 'hover:cursor-not-allowed' : 'hover:cursor-text'} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-xl border-1 border-[#CCCDD0] appearance-none dark:text-white dark:border-darkThemeTextLight dark:focus:border-primaryBlue focus:outline-none focus:ring-0 focus:border-primaryBlue peer ${props.isDisabled ? 'dark:text-gray-500 dark:bg-darkTheme1 text-darkThemeTextLight' : 'dark:text-white'}`}/>
			<label htmlFor='floating_outlined' className='pointer-events-none absolute text-darkThemeTextLight dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-1 z-[1px] origin-[0] bg-white dark:bg-darkTheme4 px-2 peer-focus:px-2 peer-focus:text-primaryBlue dark:peer-focus:text-darkThemeTextLight peer-focus:dark:text-darkThemeTextLight peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
				{props.placeholder}
				<span className={`${props.required ? 'text-primaryBlue' : 'text-darkThemeTextLight'}`}> {props.required ? '*' : '(optional)'}</span>
			</label>
		</div>
	);
};

InputFloat.defaultProps = {
	required: true
};

export default InputFloat;