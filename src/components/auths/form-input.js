import React from 'react';

const Input = (props) => {
	return (
		<div className='relative'>
			<input type={props.type} className='block rounded-t-lg px-0 pb-1 pt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryBlue/75  focus:outline-none focus:ring-0 focus:border-primaryBlue/75 peer' placeholder=' ' onChange={(e) => props.onChange(e.target.value)} autoComplete/>
			<label className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-80 top-5 z-10 origin-[0] left-0 peer-focus:text-primaryBlue peer-focus:dark:text-primaryBlue/75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-7 '>{props.placeholder}</label>
		</div>
	);
};

Input.defaultProps = {
	required: true
};

export default Input;