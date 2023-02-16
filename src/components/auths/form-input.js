import React from 'react';

const Input = (props) => {
	return (
		<div className='relative'>
			<input type={props.type} id='floating_filled' className='block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryBlue/75  focus:outline-none focus:ring-0 focus:border-primaryBlue/75 peer' placeholder=' ' />
			<label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-primaryBlue peer-focus:dark:text-primaryBlue/75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4">{props.placeholder}</label>
		</div>
	);
};

Input.defaultProps = {
	required: true
};

export default Input;